import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Message from "../../components/messages/Message";
import { getDMs, getTeams } from "../../features/conversations/conversationSlice";
import PostMessage from "../../components/messages/PostMessage";
import { io } from "socket.io-client";
import messageService from "../../features/messages/messageService";
import AddDM from "../../components/conversations/AddDM";
import AddTeam from "../../components/conversations/AddTeam";
import DirectMessages from "../../components/conversations/DirectMessages";
import Teams from "../../components/conversations/Teams";

export default function Community() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState(null);
  const { conversations, teams } = useSelector((state) => state.conversations);
  const [currentChat, setCurrentChat] = useState(null);
  const [heading, setHeading] = useState("");
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:9010");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        senderName: data.senderName,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id); // socket.emit -> send event to server
    socket.current.on("getUsers", (users) => console.log(users)); // socket.on -> take event from server
  }, [user]);

  useEffect(() => {
    dispatch(getDMs(user._id));
    dispatch(getTeams(user._id));
  }, [user, dispatch]);

  useEffect(() => {
    if (currentChat) {
      // dispatch(getMessages(currentChat._id));
      messageService
        .getMessages(currentChat._id, user.token)
        .then((res) => {
          setMessages(res);
        })
        .catch((error) => console.log(error.message));
    }
  }, [currentChat, user]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="messenger flex h-[calc(100vh-70px)]">
      <div className="chatMenu w-3/12 hidden sm:block">
        <div className="chatMenuWrapper py-4 w-full h-full">
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
            <h1 className="text-semibold tracking-wider font-mono text-md uppercase">
              <span className=" tracking-widest"> #Annou</span>ncements
            </h1>
          </div>
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
            <h1 className=" text-semibold tracking-wider font-mono text-md uppercase">
              #General
            </h1>
          </div>
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
            <h1 className=" text-semibold font-mono text-md uppercase">
              Teams
            </h1>
            <AddTeam currentUser={user}/>
          </div>
          <div className="flow-root mx-2" onClick={() => setHeading("Teams")}>
            <ul className=" divide-gray-200 capitalize">
              {teams.map((c) => (
                <div key={c._id} onClick={() => setCurrentChat(c)}>
                  <div
                    className={
                      currentChat && currentChat._id === c._id
                        ? "w-full rounded-md bg-gradient-to-t from-teal-300 to-teal-500"
                        : "w-full "
                    }
                  >
                    <Teams conversation={c} currentUser={user} />
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
            <h1 className=" text-semibold font-mono text-md uppercase" >
              Direct Messages
            </h1>
            <AddDM currentUser={user}/>
          </div>
          <div className="flow-root mx-2" onClick={() => setHeading("Direct Messages")}>
            <ul className=" divide-gray-200 capitalize">
              {conversations.map((c) => (
                <div key={c._id} onClick={() => setCurrentChat(c)}>
                  <div
                    className={
                      currentChat && currentChat._id === c._id
                        ? "w-full rounded-md bg-gradient-to-t from-teal-300 to-teal-500"
                        : "w-full "
                    }
                  >
                    <DirectMessages conversation={c} currentUser={user} />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="chatBox w-full sm:w-9/12">
        <div className="chatBoxWrapper flex flex-col h-full">
          {heading && 
          <div className=" bg-teal-500 text-white w-full shadow-sm shadow-teal-700">
            <h1 className="px-4 m-3 font-mono font-semibold capitalize">{heading}</h1>
          </div> }
          <div className="display grow overflow-auto h-[calc(100vh-23vh)] bg-gray-50 shadow-inner shadow-gray-400 rounded-t-xl border-gray-900 m-1 p-2">
            <div className="grid space-y-1">
              {currentChat ? (
                <>
                  {messages?.map((m, i, arr) => (
                    <div key={m._id} className="py-2" ref={scrollRef}>
                      <Message
                        prevMessage={i > 0 && arr[i - 1]}
                        message={m}
                        currentUser={currentUser}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <h1 className="text-semibold text-2xl text-teal-600 absolute left-1/3 top-2/4 ">
                  Welcome to Service@Ease Community 👋🏻 😊
                </h1>
              )}
            </div>
          </div>
          {currentChat &&
          <PostMessage
            socket={socket}
            setMessages={setMessages}
            currentChat={currentChat}
            currentUser={user}
          />}
        </div>
      </div>
    </main>
  );
}
