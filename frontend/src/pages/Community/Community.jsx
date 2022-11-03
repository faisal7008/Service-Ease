import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/messages/Message";
import { getConversations } from "../../features/conversations/conversationSlice";

export default function Community() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { conversations, isSuccess, isError } = useSelector(
    (state) => state.conversations
  );
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getConversations(user._id));
    // console.log(conversations)
  }, [user, isSuccess, isError, dispatch, navigate]);

  return (
    <main className="messenger flex min-h-[calc(100vh-70px)]">
      <div className="chatMenu w-3/12 border-2 ">
        <div className="chatMenuWrapper p-4 w-full min-h-full max-w-md">
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {conversations.map((c) => (
                <div key={c._id}>
                  <Conversation conversation={c} currentUser={user} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="chatBox w-6/12 border-2">
        <div className="chatBoxWrapper flex flex-col min-h-full">
          {currentChat ? (
            <Message />
          ) : (
            <h1 className="text-semibold text-2xl text-teal-600 absolute right-1/3 top-2/4 ">
              open a conversation to start
            </h1>
          )}
        </div>
      </div>
      <div className="chatOnline w-3/12 border-2">
        <div className="chatOnlineWrapper"></div>
      </div>
    </main>
  );
}
