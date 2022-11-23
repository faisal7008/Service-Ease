import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDMs,
  getTeams,
} from "../../features/conversations/conversationSlice";
import AddDM from "./AddDM";
import AddTeam from "./AddTeam";
import DirectMessages from "./DirectMessages";
import Teams from "./Teams";

export default function ConversationBox(props) {
  const dispatch = useDispatch();
  const { currentChat, user, setCurrentChat, setHeading } = props;
  const { conversations, teams } = useSelector((state) => state.conversations);

  useEffect(() => {
    dispatch(getDMs(user._id));
    dispatch(getTeams(user._id));
  }, [user, dispatch]);
  return (
    <div>
      <div className="chatMenuWrapper py-4 -mt-5 w-full h-full">
        <div
          className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between"
          onClick={() => setHeading("Announcements")}
        >
          <h1 className=" font-semibold tracking-wider font-mono text-md uppercase">
            <i class="fas fa-hashtag"></i> Announcements
          </h1>
        </div>
        <div
          className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between"
          onClick={() => setHeading("General")}
        >
          <h1 className=" font-semibold tracking-wider font-mono text-md uppercase">
            <i class="fas fa-hashtag"></i> General
          </h1>
        </div>

        <div
          className=" p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between"
        >
          <button className="hs-collapse-toggle transition-all inline-flex justify-center items-center gap-2 font-semibold font-mono text-md uppercase" id="hs-basic-collapse" data-hs-collapse="#hs-basic-collapse-heading">Teams
          <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-slate-800 dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
          </button>
          
          <AddTeam currentUser={user} />
        </div>
        <div id="hs-basic-collapse-heading" className="hs-collapse hidden mx-1 overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-collapse" onClick={() => setHeading("Teams")} >
          <ul className=" space-y-1 overflow-auto capitalize">
            {teams.map((c) => (
              <div key={c._id} onClick={() => setCurrentChat(c)}>
                <div
                  className={
                    currentChat && currentChat._id === c._id
                      ? "w-full group rounded-md bg-slate-300"
                      : "w-full group"
                  }
                >
                  <Teams
                    conversation={c}
                    conversations={conversations}
                    currentUser={user}
                  />
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className=" p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
        <button className="hs-collapse-toggle transition-all inline-flex justify-center items-center gap-2 font-semibold font-mono text-md uppercase" id="hs-basic-collapse1" data-hs-collapse="#hs-basic-collapse-heading1">Direct Messages
          <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-slate-800 dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
          </button>
          <AddDM currentUser={user} conversations={conversations} />
        </div>
        <div
          className="hs-collapse hidden mx-2 overflow-hidden transition-[height] duration-300"
          onClick={() => setHeading("Direct Messages")}
          id="hs-basic-collapse-heading1" aria-labelledby="hs-basic-collapse"
        >
          <ul className=" space-y-1 overflow-auto capitalize">
            {conversations.map((c) => (
              <div
                className={
                  currentChat && currentChat._id === c._id
                    ? "w-full group rounded-md bg-slate-300"
                    : "w-full group "
                }
                key={c._id}
                onClick={() => setCurrentChat(c)}
              >
                <DirectMessages conversation={c} currentUser={user} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
