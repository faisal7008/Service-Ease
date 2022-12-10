import React from 'react'
import { useEffect } from 'react'
import Post from '../post/Post'
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from '../../features/posts/postSlice';

export default function UserPosts({userId}) {
  const dispatch = useDispatch()
  const {userPosts, isSuccess} = useSelector(state => state.posts)
  
  useEffect(() => {
    dispatch(getUserPosts({userId: userId}))
  }, [dispatch, isSuccess])

  return (
    <div className='grid grid-cols-2 gap-4 p-4 h-full w-full overflow-auto bg-slate-50 shadow-slate-300 shadow-inner'>
      {userPosts?.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}
