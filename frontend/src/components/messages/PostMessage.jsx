import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import messageService from "../../features/messages/messageService";
import { postMessage } from "../../features/messages/messageSlice";

export default function PostMessage(props) {
  const { socket, currentChat, currentUser, arrivalMessage, setMessages } = props
  const [newMessage, setNewMessage] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msgData = {
      sender: currentUser._id,
      senderName: currentUser.name,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser._id
    );

    await socket.current.emit("send_message", msgData);
    // messageService.postMessage(msgData, currentUser.token).then(p => console.log(p)).catch(err => err.message)
    dispatch(postMessage(msgData))
    setNewMessage("")
  };


  return (
    <div className="display rounded-xl mx-0">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center py-2 px-3 bg-slate-200 rounded-b-xl dark:bg-gray-700">
          <button
            type="button"
            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <i className="fas fa-paperclip fa-lg"></i>
            <span className="sr-only">Add file</span>
          </button>
          <textarea
            // type="text"
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 resize-none bg-white rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            placeholder="Your message..."
            onChange={(e) => setNewMessage(e.target.value)}
            value={newMessage}
          />
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-teal-600 rounded-full cursor-pointer hover:bg-emerald-50 dark:text-teal-500 dark:hover:bg-gray-600"
            disabled={newMessage === ""}
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  );
}