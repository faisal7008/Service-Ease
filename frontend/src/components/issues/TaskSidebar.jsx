import {HiOutlineViewBoards} from 'react-icons/hi'
import {FiDatabase, FiSettings} from 'react-icons/fi'
import projectlogo from "../../assets/project-logo.webp"
import { useState } from 'react'

export default function TaskSidebar({project}) {
  const [current, setCurrent] = useState("Board")
  return (
    <div className='mx-2 my-4 px-1 py-2'>
        <div className="flex items-start max-w-sm space-x-4">
          <div className="flex-shrink-0 mt-1">
            <img
              className="w-8 h-8 rounded-md"
              src={projectlogo}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 w-full">
            <p className="text-sm w-full font-semibold text-gray-900 truncate">
              {project?.name}
            </p>
            <p className="text-xs w-full font-semibold text-gray-600 truncate ">
              project type
            </p>
          </div>
        </div>
        <div className='mt-4'>
        <ul className="space-y-1.5">
          <li>
            <a className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-medium text-slate-700 rounded-md hover:bg-gray-200">
              <FiDatabase size={16}/> Roadmap
            </a>
          </li>
          <li>
            <a onClick={() => setCurrent("Board")} className={"flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-gray-200 text-sm font-medium text-teal-600 rounded-md hover:bg-gray-200"}>
              <HiOutlineViewBoards size={18}/> Board
            </a>
          </li>
          <li>
            <a onClick={() => setCurrent("Settings")} className="flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-medium text-slate-700 rounded-md hover:bg-gray-200">
              <FiSettings size={16}/> Project Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
