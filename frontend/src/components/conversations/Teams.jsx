// import UserLogo from "../../assets/user.webp";
import { useDispatch } from "react-redux";
import { deleteConversation } from "../../features/conversations/conversationSlice";
import { useEffect } from "react";

const UserLogo = "https://res.cloudinary.com/dopuxe0m5/image/upload/v1671447572/service%40ease%20project%20assets/user_ufjgmf.webp"

export default function Teams(props) {
  const { conversation, conversations, currentUser } = props;
  const dispatch = useDispatch()

  const handleClick = () => {
    //console.log(conversation);
    const choice = window.confirm(`Are you sure you want to remove ${conversation.name}`);
    if(choice){
      dispatch(deleteConversation(conversation._id))
    }
  }

  // useEffect(() => {
  //   console.log("deleted successfully...");
  // }, [conversations])

  return (
    <div className="px-3 py-1 rounded-md group-hover:bg-slate-200 cursor-pointer sm:py-2">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="w-7 h-7 rounded-full" src={UserLogo} alt="Neil image" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate ">
            {conversation.name}
          </p>
          {/* <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {friendUser.role}
          </p> */}
        </div>
        <div className="text-base font-thin text-gray-900">
          <button onClick={handleClick} className=" px-3 py-1 text-transparent group-hover:text-gray-600">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
