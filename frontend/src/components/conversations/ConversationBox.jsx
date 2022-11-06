import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDMs, getTeams } from '../../features/conversations/conversationSlice'
import AddDM from './AddDM'
import AddTeam from './AddTeam'
import DirectMessages from './DirectMessages'
import Teams from './Teams'

export default function ConversationBox(props) {
    const dispatch = useDispatch()
    const {currentChat, user, setCurrentChat, setHeading} = props
    const { conversations, teams } = useSelector((state) => state.conversations);

    useEffect(() => {
        dispatch(getDMs(user._id));
        dispatch(getTeams(user._id));
      }, [user, dispatch]);
  return (
    <div>
        <div className="chatMenuWrapper py-4 w-full h-full">
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between" onClick={() => setHeading("Announcements")}>
            <h1 className=" font-semibold tracking-wider font-mono text-md uppercase">
              <span className=" tracking-widest"> #Annou</span>ncements
            </h1>
          </div>
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between" onClick={() => setHeading("General")}>
            <h1 className=" font-semibold tracking-wider font-mono text-md uppercase">
              #General
            </h1>
          </div>
          <div className="p-3 mb-2 mx-2 hover:bg-slate-200 rounded-md flex justify-between">
            <h1 className=" font-semibold font-mono text-md uppercase">
              Teams
            </h1>
            <AddTeam currentUser={user}/>
          </div>
          <div className="flow-root m-2" onClick={() => setHeading("Teams")}>
            <ul className=" divide-gray-200 capitalize">
              {teams.map((c) => (
                <div key={c._id} onClick={() => setCurrentChat(c)}>
                  <div
                    className={
                      currentChat && currentChat._id === c._id
                        ? "w-full rounded-md bg-slate-200"
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
            <h1 className=" font-semibold font-mono text-md uppercase" >
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
                        ? "w-full rounded-md hover:bg-slate-200 bg-slate-300"
                        : "w-full"
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
  )
}
