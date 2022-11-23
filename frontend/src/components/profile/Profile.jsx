import userPic from "../../assets/user.webp";
import { useDispatch, useSelector } from "react-redux";
import UserPosts from "../../components/post/UserPosts";
import LikedPosts from "../../components/post/LikedPosts";
import SearchBox from "../../components/searchbox/SearchBox";
import EditProfile from "./EditProfile";
import Followers from "./Followers";
import Followings from "./Followings";
import { getMyProfile } from "../../features/users/userSlice";
import { useEffect } from "react";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMyProfile())
  }, [dispatch, profile])
  

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            My Profile
          </h1>
        </div>
      </header>
      <main className=" h-screen">
        <div className="mx-auto flex max-w-7xl h-full py-6 sm:px-6 lg:px-8">
          <div className=" w-4/6 m-2 h-full">
            <div className="m-2 h-72">
              <div className="h-40 bg-gradient-to-r from-teal-200 to-teal-300"></div>
              <div className=" absolute -mt-14 bg-white ml-3 p-1 rounded-full w-max">
                <img
                  className=" w-24 h-24 rounded-full shadow-lg"
                  src={user?.profilePicture || userPic }
                  alt="user"
                />
              </div>
              <div className="mt-14 ml-4">
                <h1 className=" text-xl font-semibold">{user?.name}</h1>
                <h1 className=" text-gray-600 text-sm">@{user?.role}</h1>
              </div>
            </div>
            <div className="m-2 h-full">
              <nav
                className="relative z-0 flex border rounded-t-md overflow-hidden dark:border-gray-700"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="hs-tab-active:border-b-teal-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-teal-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 active"
                  id="bar-with-underline-item-1"
                  data-hs-tab="#bar-with-underline-1"
                  aria-controls="bar-with-underline-1"
                  role="tab"
                >
                  Posts
                </button>
                <button
                  type="button"
                  className="hs-tab-active:border-b-teal-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-teal-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 "
                  id="bar-with-underline-item-2"
                  data-hs-tab="#bar-with-underline-2"
                  aria-controls="bar-with-underline-2"
                  role="tab"
                >
                  Likes
                </button>
                <button
                  type="button"
                  className="hs-tab-active:border-b-teal-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-teal-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 "
                  id="bar-with-underline-item-3"
                  data-hs-tab="#bar-with-underline-3"
                  aria-controls="bar-with-underline-3"
                  role="tab"
                >
                  Edit Profile
                </button>
              </nav>

              <div className="mt-3">
                <div
                  id="bar-with-underline-1"
                  className=" h-[36rem]"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-1"
                >
                  <UserPosts userId={user._id}/>
                </div>
                <div
                  id="bar-with-underline-2"
                  className="hidden h-[36rem]"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-2"
                >
                  <LikedPosts userId={user._id}/>
                </div>
                <div
                  id="bar-with-underline-3"
                  className="hidden h-[36rem]"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-3"
                >
                  <EditProfile/>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/6 m-2 h-full">
            <SearchBox/>
            <div>
              <nav
                className="relative z-0 flex border rounded-t-md overflow-hidden dark:border-gray-700"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="hs-tab-active:border-b-teal-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-teal-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 active"
                  id="bar-with-underline-item-11"
                  data-hs-tab="#bar-with-underline-11"
                  aria-controls="bar-with-underline-11"
                  role="tab"
                >
                  Followers
                </button>
                <button
                  type="button"
                  className="hs-tab-active:border-b-teal-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-teal-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 "
                  id="bar-with-underline-item-22"
                  data-hs-tab="#bar-with-underline-22"
                  aria-controls="bar-with-underline-22"
                  role="tab"
                >
                  Following
                </button>
              </nav>

              <div className="mt-3">
                <div
                  id="bar-with-underline-11"
                  className=" h-[36rem]"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-11"
                >
                  {profile?.followers?.map((follower) => (
                  <Followers key={follower._id} followerId={follower} user={user}/>
                  ))}
                </div>
                <div
                  id="bar-with-underline-22"
                  className="hidden h-[36rem]"
                  role="tabpanel"
                  aria-labelledby="bar-with-underline-item-22"
                >
                  {profile?.followings?.map((following) => (
                  <Followings key={following._id} followingId={following} user={user}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
