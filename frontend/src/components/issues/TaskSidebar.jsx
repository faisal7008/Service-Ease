import {BsKanban} from 'react-icons/bs'
import {IoMdMap, IoMdSettings} from 'react-icons/io'
import {FiDatabase, FiMap, FiSettings} from 'react-icons/fi'
// import projectlogo from "../../assets/project_logo.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const projectlogo = "https://res.cloudinary.com/dopuxe0m5/image/upload/v1671447572/service%40ease%20project%20assets/project_logo_xiitzw.png"

export default function TaskSidebar({project, setCurrent, current}) {
  return (
    <div className='mx-2 my-4 px-1 py-2'>
        <div className="flex items-start overflow-clip p-1 w-full space-x-3">
          <div className="flex-shrink-0 mt-1">
            <img
              className="w-9 h-9 rounded-md"
              src={projectlogo}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 max-w-xs">
            <p className="text-sm font-semibold text-gray-900 truncate">
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
            <Link onClick={() => setCurrent("Roadmap")} className={current === "Roadmap" ? "flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-teal-500 shadow text-sm font-medium text-teal-50 rounded-md" : "flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-200"}>
              <IoMdMap size={18}/> Roadmap
            </Link>
          </li>
          <li>
            <Link onClick={() => setCurrent("Board")} className={current === "Board" ? "flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-teal-500 shadow text-sm font-medium text-teal-50 rounded-md" : "flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-200"}>
              <BsKanban size={18}/> Board
            </Link>
          </li>
          <li>
            <Link onClick={() => setCurrent("Settings")} className={current === "Settings" ? "flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-teal-500 shadow text-sm font-medium text-teal-50 rounded-md" : "flex items-center cursor-pointer gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm font-medium text-slate-700 rounded-md hover:bg-gray-200"}>
              <IoMdSettings size={18}/> Project Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
