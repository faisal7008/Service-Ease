import React from 'react'
import { useEffect } from 'react'
import Post from '../post/Post'
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../../features/posts/postSlice';

export default function General() {
  const dispatch = useDispatch()
  const {posts, isSuccess, isError} = useSelector(state => state.posts)
  
  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch, isSuccess, isError])

  return (
    <div className='grid gap-4 p-4 sm:pl-10 h-full w-full overflow-auto bg-slate-50 shadow-slate-300 shadow-inner'>
      {posts?.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}
