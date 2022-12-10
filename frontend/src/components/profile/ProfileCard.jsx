import { Button } from "@material-tailwind/react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import profile_bg from "../../assets/profile-bg.jpeg"
import userpic from "../../assets/user.webp"

export default function ProfileCard({profile}) {
    
  return (
    <div>
        <div className="flex flex-col bg-white shadow-slate-200 shadow-lg rounded-md">
            <div className="grid place-items-center">
  <img className="w-full h-48 rounded-t" src={profile_bg} alt="Image Description" />
  <img className="w-28 h-28 border-4 border-white -mt-14 rounded-full" src={profile.profilePicture ? profile.profilePicture : userpic} alt="Image Description" />
  </div>
  <div className="flex justify-between -mt-12 mx-4">
  <button type="button" className="py-1.5 px-2.5 rounded-md border border-transparent font-medium bg-sky-500 text-white hover:bg-sky-600 transition-all text-sm">
  connect
</button>
<button type="button" className="py-1.5 px-2.5 rounded-md border border-transparent font-medium bg-slate-800 text-white hover:bg-slate-900 transition-all text-sm">
  message
</button>
  </div>
  <div className="grid place-items-center gap-3 p-4 md:p-5">
  <div className="flex w-full justify-around">
    <p className="mt-5 grid grid-cols-1 place-items-center gap-0 text-sm text-slate-900">
      <span className=" font-semibold text-lg"> {profile.followers?.length}</span>
      <span className=" "> Followers</span>
    </p>
    <p className="mt-5 grid grid-cols-1 place-items-center gap-0 text-sm text-slate-900">
      <span className=" font-semibold text-lg"> {profile.followings?.length}</span>
      <span className=" "> Followings</span>
    </p>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
      {profile.name}
    </h3>
      <p className="-mt-3 text-sm text-gray-800 dark:text-gray-400">
      username
    </p>
    <p className="text-base font-medium text-gray-800 dark:text-gray-400">
      {profile.role} at <span className="italic"> Service<span className="text-teal-600">@</span>Ease </span>
    </p>
    
    
  </div>
</div>
    </div>
  )
}
