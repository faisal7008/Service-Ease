import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import messageService from '../../features/messages/messageService';
import Message from './Message'
import PostMessage from './PostMessage'

export default function MessageBox(props) {
    const {currentChat, currentUser} = props
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [messages, setMessages] = useState(null);
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
    socket.current.emit("addUser", currentUser._id); // socket.emit -> send event to server
    socket.current.on("getUsers", (users) => console.log(users)); // socket.on -> take event from server
  }, [currentUser]);

    useEffect(() => {
        if (currentChat) {
          // dispatch(getMessages(currentChat._id));
          messageService
            .getMessages(currentChat._id, currentUser.token)
            .then((res) => {
              setMessages(res);
            })
            .catch((error) => console.log(error.message));
        }
      }, [currentChat, currentUser]);
    
      useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

  return (
    <div className='h-full'>
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
            currentUser={currentUser}
          />}
    </div>
  )
}
