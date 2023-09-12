import { useEffect, useState } from 'react';
import UserPic from '../../assets/user.webp';
import userService from '../../features/users/userService';

export default function Followers({ user, followerId }) {
  const [follower, setFollower] = useState();

  useEffect(() => {
    userService
      .getUser(followerId, user.token)
      .then((res) => setFollower(res))
      .catch((err) => console.log(err.message));
  }, [followerId, user]);
  return (
    <div>
      <div className='flex p-3 items-center space-x-4'>
        <div className='flex-shrink-0'>
          <img className='w-10 h-10 rounded-full' src={UserPic} alt='Neil image' />
        </div>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
            {follower?.name}
          </p>
          <p className='text-sm text-gray-500 truncate dark:text-gray-400'>{follower?.email}</p>
        </div>
        {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button  className=" text-teal-500">
              <i className="fas fa-plus fa-sm"></i> Follow
            </button> */}
        {/* onClick={() => handleDelete(post?._id)} */}
        {/* </div> */}
      </div>
    </div>
  );
}
