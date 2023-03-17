import {useDispatch, useSelector} from "react-redux"
import ProfileCard from "./ProfileCard"
import ProfileMain from "./ProfileMain"
import {getMyProfile}  from "../../features/users/userSlice"
import { useEffect } from "react"

export default function Profile() {
  const {profile} = useSelector(state => state.users)
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMyProfile())
    }, [])
  return (
    <div>
      <div className="flex items-center mx-2 sm:mx-12 py-4">
            <ol
              className="ml-3 flex items-center whitespace-nowrap min-w-0"
              aria-label="Breadcrumb"
            >
              <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                {profile?.role}
                <svg
                  className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li
                className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400"
                aria-current="page"
              >
                Profile
              </li>
            </ol>
      </div>
      <main className="flex flex-col sm:flex-row mb-6 md:flex mx-2 sm:mx-12 gap-4 justify-center p-2 ">
        <div className=" px-2 max-w-[25rem]">
          <ProfileCard profile={profile}/>
        </div>
        <div className="shadow-lg shadow-slate-200 rounded-lg h-fit bg-white sm:w-3/4">
          <ProfileMain profile={profile}/>
        </div>
      </main>
    </div>
  )
}
