import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/messages/Message";
import { getConversations } from "../../features/conversations/conversationSlice";
import { getMessages } from "../../features/messages/messageSlice";
import PostMessage from "../../components/messages/PostMessage";

export default function Community() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.messages);
  const { conversations } = useSelector(
    (state) => state.conversations
  );
  const [currentChat, setCurrentChat] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getConversations(user._id));
    // console.log(conversations)
  }, [user, dispatch, navigate]);

  useEffect(() => {
    if (currentChat) {
      dispatch(getMessages(currentChat._id));
    }
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="messenger flex h-[calc(100vh-70px)]">
      <div className="chatMenu w-3/12 border-2 ">
        <div className="chatMenuWrapper py-4 w-full h-full">
          <div className="p-2 mb-2">
            <h1 className=" text-semibold font-mono text-md uppercase">Direct Messages</h1>
          </div>
          <div className="flow-root mx-2">
            <ul role="list" className=" divide-gray-200">
              {conversations.map((c) => (
                <div key={c._id} onClick={() => setCurrentChat(c)}>
                  <div
                    className={
                      currentChat && currentChat._id === c._id
                        ? "w-full rounded-md bg-gradient-to-t from-teal-300 to-teal-500"
                        : "w-full "
                    }
                  >
                    <Conversation conversation={c} currentUser={user} />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="chatBox w-7/12 border-2">
        <div className="chatBoxWrapper flex flex-col h-full">
          <div className="display grow overflow-auto shadow-sm bg-gray-50 rounded-t-xl border-gray-900 m-1 p-2">
            <div className="grid space-y-1">
              {currentChat ? (
                <>
                  {messages.map((m) => (
                    <div key={m._id} > {/* ref={scrollRef} */}
                    <Message message={m} currentUser={user}/>
                    </div>
                  ))}
                </>
              ) : (
                <h1 className="text-semibold text-2xl text-teal-600 absolute right-1/3 top-2/4 ">
                  open a conversation to start
                </h1>
              )}
            </div>
          </div>
          <PostMessage currentChat={currentChat} currentUser={user}/>
        </div>
      </div>
      <div className="chatOnline w-2/12 border-2 ">
        <div className="chatOnlineWrapper h-full"></div>
      </div>
    </main>
  );
}
