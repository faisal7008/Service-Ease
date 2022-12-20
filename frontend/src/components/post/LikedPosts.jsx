import React from 'react'
import { useEffect } from 'react'
import Post from '../post/Post'
import { useDispatch, useSelector } from "react-redux";
import { getLikedPosts } from '../../features/posts/postSlice';

export default function LikedPosts({userId}) {
  const dispatch = useDispatch()
  const {likedPosts, isSuccess, isError} = useSelector(state => state.posts)
  
  useEffect(() => {
    dispatch(getLikedPosts({userId: userId}))
  }, [dispatch, isSuccess, isError])

  return (
    <div className='grid gap-4 sm:grid-cols-2 p-4 h-full w-full overflow-auto bg-slate-50 shadow-slate-300 shadow-inner'>
      {likedPosts.length > 0 ? likedPosts?.map(post => (
        <Post key={post._id} post={post} />
      )) : <h1 className=' text-center font-semibold text-lg my-4'>Nothing Posted Yet.</h1> }
    </div>
  )
}
