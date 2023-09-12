import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import messageService from '../../features/messages/messageService';
import userService from '../../features/users/userService';
import Message from './Message';
import PostMessage from './PostMessage';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../features/messages/messageSlice';
import Skeleton from '../handlers/Skeleton';

// const socket = io.connect("http://localhost:9010");

export default function MessageBox(props) {
  const {messages: userMessages} = useSelector(state => state.messages)
  const { currentChat } = props;
  const {user: currentUser} = useSelector(state => state.auth)
  const [friendUser, setFriendUser] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState(userMessages);
  const dispatch = useDispatch();
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    setMessages(userMessages);
  }, [userMessages])

  useEffect(() => {
    socket.current = io.connect(process.env.REACT_APP_SOCKET_API);
    // socket.current = io.connect(process.env.REACT_APP_SOCKET_API_LOCAL)
  }, []);

  // useEffect(() => {
  //   console.log(currentChat);
  // }, [currentChat])

  useEffect(() => {
    currentChat && socket.current.emit('join_room', currentChat._id);
  }, [currentChat]);

  useEffect(() => {
    socket.current.on('receive_message', (arrivedMsg) => {
      setArrivalMessage(arrivedMsg);
    });
  }, [socket]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (currentChat) {
      // messageService
      //   .getMessages(currentChat._id, currentUser.token)
      //   .then((res) => {
      //     setMessages(res);
      //   })
      //   .catch((error) => console.log(error.message));
      dispatch(getMessages(currentChat._id))
    }
  }, [currentChat, currentUser]);

  useEffect(() => {
    if (currentChat) {
      userService
        .getUser(currentChat?.members[1], currentUser.token)
        .then((res) => setFriendUser(res))
        .catch((err) => console.log(err));
    }
    // console.log(friendUser)
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className=' h-full'>
      <div className='flex  justify-between bg-teal-500 text-white w-full shadow-sm shadow-teal-700'>
        <h1 className='px-4 m-3 ml-7 sm:m-3 flex gap-2 items-center font-mono font-semibold capitalize'>
          {currentChat?.name || friendUser?.name || <Skeleton/>}
        </h1>
      </div>
      <div className='display grow overflow-auto h-[calc(100vh-173px)] bg-slate-100 shadow-inner shadow-gray-400 rounded-none border-gray-900 p-2'>
        <div className='grid space-y-1'>
          {currentChat ? (
            <>
              {messages?.map((m, i, arr) => (
                <div key={m._id} className='py-2' ref={scrollRef}>
                  {/* { moment(m?.createdAt).diff(moment((i > 0 && arr[i-1])?.createdAt), "days") < 1 && <p className="my-1 text-center font-mono text-xs font-semibold" >{moment(m?.createdAt).format('ll')}</p>} */}
                  <Message
                    prevMessage={i > 0 && arr[i - 1]}
                    message={m}
                    currentUser={currentUser}
                  />
                </div>
              ))}
            </>
          ) : (
            <h1 className='text-semibold text-2xl text-teal-600 absolute left-1/3 top-2/4 '>
              Welcome to Service@Ease Community 👋🏻 😊
            </h1>
          )}
        </div>
      </div>
      {currentChat && (
        <PostMessage
          socket={socket}
          arrivalMessage={arrivalMessage}
          messages={messages}
          setMessages={setMessages}
          currentChat={currentChat}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}
