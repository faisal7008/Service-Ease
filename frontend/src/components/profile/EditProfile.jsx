import userPic from "../../assets/user.webp";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../features/auth/authSlice";
import { getMyProfile, reset, updateProfile } from "../../features/users/userSlice";
import { Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile({profile}) {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const [postImg, setPostImg] = useState(null);

  useEffect(() => {
    dispatch(getMyProfile())
  }, [dispatch, isError, isSuccess])

  const initialState = {
    name: profile.name,
    id_no: profile.id_no,
    email: profile.email,
    username: profile.username ? profile.username : "",
    location: profile.location ? profile.location : "",
    desc: profile.desc ? profile.desc : "",
    password: "",
    confirmPassword: "",
  }

  const [formData, setFormData] = useState(initialState);
  const [profilePic, setProfilePic] = useState("");
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);

  const { name, id_no, email, username, location, desc, password, confirmPassword } = formData;

  useEffect(() => {
    if (isError) {
      setError(message);
    }
  }, [isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onProfileUpload = (e) => {
    const img = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(img)
    reader.onloadend = () => {
      setPostImg(reader.result)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      id_no,
      desc,
      location,
      username,
    };
    // console.log(userData)
    if(postImg !== null){
      console.log(postImg);
      userData.profilePicture = postImg
    }
    if(password !== ""){
      userData.password = password
    }
      
    // if (userData.password !== "") {  // || userData.profilePicture !== ""
      if (password && password !== confirmPassword) {
        setError("Password do not match");
      } else {
        // console.log(userData);
        dispatch(updateProfile(userData));
        // window.location.reload(false)
        // alert("To reflect changes, please login again.");
        // if (isSuccess) {
        //   // dispatch(logout());
        //   dispatch(reset())
        //   // navigate("/login");
        // }
      }
    // } else{
    //   console.log(userData)
    //   // dispatch(updateProfile(userData));
    //   setMsg("Profile edited successfully!");
    // }
  };

  if (isLoading) {
    <div
      className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-teal-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>;
  }

  return (
    <div>
      {msg &&
      <div className="absolute z-10 top-4 right-4">
      <div className="max-w-xs bg-green-100 border border-green-200 text-sm text-green-500 rounded-md shadow-md" role="alert">
    <div className="flex items-center p-4">
      {msg}
      <div className="ml-2">
        <button type="button" onClick={() => setMsg("")} className="inline-flex flex-shrink-0 justify-center items-center p-2 rounded-full text-green-400 hover:bg-green-200 transition-all text-xs">
          <span className="sr-only">Close</span>
          <svg className="w-2.5 h-2.5" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
      </div>}
      <form className="min-w-full px-1 sm:px-6 py-3" onSubmit={onSubmit}>
        <div className="grid gap-5 mb-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="fname" className="block text-sm font-medium mb-2">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="fname"
                  name="name"
                  value={name}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="first name"
                />
              </div>
            </div>
            <div>
              <label for="lname" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="last name"
                />
              </div>
            </div>
            <div>
              <label for="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="username"
                />
              </div>
            </div>
            <div>
              <label for="email" className="block text-sm font-medium mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="you@site.com"
                />
              </div>
            </div>
            <div>
              <label for="profilepic" className="block text-sm font-medium mb-2">
                Upload Profile Picture
              </label>
              <input
                type="file"
                name="profilepic"
                id="profilepic"
                onChange={(e) => onProfileUpload(e)}
                className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500 file:bg-transparent file:rounded-l-md file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4"
              />
            </div>
            <div>
              <label for="coverpic" className="block text-sm font-medium mb-2">
                Upload Cover Picture
              </label>
              <input
                type="file"
                name="coverpic"
                id="coverpic"
                className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4"
              />
            </div>
          </div>
          <div className="grid gap-5">
            <div>
              <label for="location" className="block text-sm font-medium mb-2">
                Address
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Write your address here"
                />
              </div>
            </div>
            <div>
              <label for="about" className="block text-sm font-medium mb-2">
                About Me
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  type="text"
                  id="about"
                  name="desc"
                  value={desc}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="Write about yourself"
                />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="********"
                />
              </div>
            </div>
            <div>
              <label
                for="repeat-password"
                className="block text-sm font-medium mb-2"
              >
                Repeat password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="repeat-password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                  className="py-3 px-4 block w-full text-gray-900 font-medium border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="********"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded text-sm w-max sm:w-auto px-6 py-2.5 text-center"
        >
          Save
        </button>
      </form>
    </div>
  );
}
