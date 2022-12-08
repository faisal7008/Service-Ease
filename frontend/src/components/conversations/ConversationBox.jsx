import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDMs,
  getTeams,
} from "../../features/conversations/conversationSlice";
import AddDM from "./AddDM";
import AddTeam from "./AddTeam";
import DirectMessages from "./DirectMessages";
import Teams from "./Teams";
import { useState } from "react";

export default function ConversationBox(props) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("Announcements");
  const { currentChat, user, setCurrentChat, setHeading, heading } = props;
  const { conversations, teams } = useSelector((state) => state.conversations);

  useEffect(() => {
    dispatch(getDMs(user._id));
    dispatch(getTeams(user._id));
  }, [user, dispatch]);

  useEffect(() => {}, [currentChat]);

  useEffect(() => {
    if (heading !== "Announcements" || heading !== "General") {
      setCurrent("");
    }
  }, [heading]);

  const handleClick = (c) => {
    // console.log(c)
    // setHeading(c?.name)
    setCurrentChat(c);
  };

  return (
    <div>
      <div className="chatMenuWrapper py-4 -mt-5 w-full h-full">
        <div
          onClick={() => setHeading("Announcements")}
          className={
            current === "Announcements"
              ? "p-3 mb-2 mx-2 shadow-sm bg-slate-200 rounded-md flex justify-between"
              : "p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between"
          }
        >
          <Link
            onClick={() => setCurrent("Announcements")}
            className="w-full font-semibold tracking-wider font-mono text-md uppercase"
          >
            <i class="fas fa-hashtag"></i> Announcements
          </Link>
        </div>
        <div
          onClick={() => setHeading("General")}
          className={
            current === "General"
              ? "p-3 mb-2 mx-2 bg-slate-200 shadow-sm rounded-md flex justify-between"
              : "p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between"
          }
        >
          <Link
            onClick={() => setCurrent("General")}
            className="w-full font-semibold tracking-wider font-mono text-md uppercase"
          >
            <i class="fas fa-hashtag"></i> General
          </Link>
        </div>

        <div className=" p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
          <button
            className="hs-collapse-toggle transition-all inline-flex justify-center items-center gap-2 font-semibold font-mono text-md uppercase"
            id="hs-basic-collapse"
            data-hs-collapse="#hs-basic-collapse-heading"
          >
            Teams
            <svg
              class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-slate-800 dark:text-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>

          <AddTeam currentUser={user} />
        </div>
        <div
          id="hs-basic-collapse-heading"
          className="hs-collapse hidden mx-2 overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-collapse"
          onClick={() => setHeading("Teams")}
        >
          <ul className=" space-y-1 overflow-auto capitalize">
            {teams.map((c) => (
              <li>
                <Link key={c._id} onClick={() => setCurrentChat(c)}>
                  <div
                    className={
                      currentChat && currentChat._id === c._id
                        ? "w-full group rounded-md bg-slate-200"
                        : "w-full group"
                    }
                  >
                    <Teams
                      conversation={c}
                      conversations={conversations}
                      currentUser={user}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" p-3 my-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
          <button
            className="hs-collapse-toggle transition-all inline-flex justify-center items-center gap-2 font-semibold font-mono text-md uppercase"
            id="hs-basic-collapse1"
            data-hs-collapse="#hs-basic-collapse-heading1"
          >
            Direct Messages
            <svg
              class="hs-collapse-open:rotate-180 w-2.5 h-2.5 text-slate-800 dark:text-white"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <AddDM currentUser={user} conversations={conversations} />
        </div>
        <div
          className="hs-collapse hidden mx-2 overflow-hidden transition-[height] duration-300"
          onClick={() => setHeading("Direct Messages")}
          id="hs-basic-collapse-heading1"
          aria-labelledby="hs-basic-collapse"
        >
          <ul className=" space-y-1 overflow-auto capitalize">
            {conversations.map((c) => (
              <li>
                <Link key={c._id} onClick={() => setCurrentChat(c)}>
                  <div
                    className={
                      currentChat && currentChat._id === c._id
                        ? "w-full group rounded-md bg-slate-200"
                        : "w-full group "
                    }
                  >
                    <DirectMessages conversation={c} currentUser={user} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
