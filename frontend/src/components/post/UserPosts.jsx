import React from 'react';
import { useEffect } from 'react';
import Post from '../post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts } from '../../features/posts/postSlice';

export default function UserPosts({ userId }) {
  const dispatch = useDispatch();
  const { userPosts, isSuccess } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getUserPosts({ userId: userId }));
  }, [dispatch, isSuccess]);

  return (
    <div
      className={`grid ${
        userPosts.length > 0 ? 'sm:grid-cols-2' : ''
      } gap-4 p-4 h-full w-full overflow-auto bg-slate-50 shadow-slate-300 shadow-inner`}
    >
      {userPosts.length > 0 ? (
        userPosts?.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1 className=' text-center font-semibold text-lg my-4'>Nothing Posted Yet.</h1>
      )}
    </div>
  );
}
