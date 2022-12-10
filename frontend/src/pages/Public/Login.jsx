import { LockClosedIcon, ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import ErrorBox from "../../utilities/ErrorBox"
// import MainLogo from "../assets/main-logo.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setError(message);
    }
    if (isSuccess && user) {
      if (user.role === "Leader"){
        navigate("/leadership/dashboard");
      }
      else if (user.role === "Manager"){
        navigate("/manager/dashboard");
      }
      else {
        navigate("/employee/dashboard");
      }
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, msg, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const Loader = () => {
    return (
      <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>    
    )
  }

  const ErrorContainer = () => {
    return (
      // <div className="">
      <Alert show={error !== null} variant="filled" className=" bg-orange-600">
        <span>
          <span className="font-medium">Error!</span> {error}
        </span>
      </Alert>
      // </div>
    );
  };

  // const SuccessContainer = () => {
  //   return (
  //     <Alert color="success">
  //       <span>
  //         <span className="font-medium">Success!</span> {msg}
  //       </span>
  //     </Alert>
  //   );
  // };

  return (
    <>
      <a href="/">
        <ArrowLeftCircleIcon
          className="h-10 w-10 absolute m-4 text-teal-500 hover:text-teal-600"
          aria-hidden="true"
        />
      </a>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
          <div>
            <h1 className="font-mono text-center text-slate-900 text-2xl font-semibold">Service<span className="text-3xl ml-1 mr-1 text-teal-500">@</span>Ease</h1>
            <h2 className="mt-3 mb-3 text-center text-3xl font-bold tracking-normal text-gray-900">
              Sign in to your account
            </h2>
            <p className="text-center text-sm text-gray-600">
              Or{' '}
              <a href="/register" className="font-medium text-teal-600 hover:text-teal-500">
                New here
              </a>
            </p>
            
          </div>
          <form className=" space-y-6" onSubmit={onSubmit}>
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            {error ? <ErrorContainer /> : <></>}
            {/* {message ? <SuccessContainer /> : <></>} */}
            {/* <ErrorBox message={error}/> */}
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={onChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={onChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-teal-600 hover:text-teal-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                    aria-hidden="true"
                  />
                </span>
                {isLoading ? <Loader/> :  "Sign in"}
              </button>
            </div>

            <div className="text-center">
              <p className="mt-2 text-center text-sm text-gray-600">
                Or <a className="font-medium text-teal-600">Signup with:</a>
              </p>

              <div className="mt-4 flex justify-center gap-2">
                <button
                  type="button"
                  className="p-0 w-10 h-10 rounded-full border border-transparent bg-teal-600 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <i className="fab fa-facebook-f text-base"></i>
                  {/* <FaFacebook/> */}
                </button>

                <button
                  type="button"
                  className="p-0 w-10 h-10 rounded-full border border-transparent bg-teal-600 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  // onClick={handleGoogleLogin}
                >
                  <i className="fab fa-google text-base"></i>
                  {/* <FaGoogle/> */}
                </button>

                <button
                  type="button"
                  className="p-0 w-10 h-10 rounded-full border border-transparent bg-teal-600 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  <i className="fab fa-github text-base"></i>
                  {/* <FaGithub/> */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
