import { useState, useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { LockClosedIcon, ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, reset } from "../../features/users/userSlice";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    name: "",
    id_no: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { name, id_no, email, role, password, confirmPassword } = formData;

  // const { user } = useSelector((state) => state.auth);
  const { users, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (isError) {
      setError(message);
    }
    if (isSuccess) {
      navigate("/login");
    }
  }, [users, isError, isSuccess, message, navigate, dispatch, error]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password do not match");
    } else {
      const userData = {
        name,
        id_no,
        email,
        role,
        password,
      };
      dispatch(addUser(userData));
      dispatch(reset());
    }
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
      <Alert color="failure">
        <span>
          <span className="font-medium">Error!</span> {error}
        </span>
      </Alert>
    );
  };

  return (
    <>
      <a onClick={() => navigate(-1)}>
        <ArrowLeftCircleIcon
          className="h-10 w-10 absolute m-4 text-teal-500 hover:text-teal-600 cursor-pointer"
          aria-hidden="true"
        />
      </a>
      <div className="flex flex-col min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img
              className="mx-auto h-12 w-auto"
              src={MainLogo}
              height={100}
              width={70}
            /> */}
            <h1 className="font-mono text-center text-slate-900 text-2xl font-semibold">Service<span className="text-3xl ml-1 mr-1 text-teal-500">@</span>Ease</h1>
            <h2 className="mt-2 text-center text-3xl font-bold tracking-normal text-gray-900">
              Register Your Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/login" className="font-medium text-teal-600 hover:text-teal-500">
                Already Registered ?
              </a>
            </p>
          </div>
          {error ? <ErrorContainer /> : <></>}
          <form className="space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={onChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 capitalize px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  ID Number
                </label>
                <input
                  id="id_no"
                  name="id_no"
                  type="text"
                  value={id_no}
                  onChange={onChange}
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 capitalize px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="ID Number"
                />
              </div>
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
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              <div>
                <div className="flex">
                  <button
                    className="relative block w-max appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    type="button"
                    disabled
                  >
                    Role
                  </button>
                  <label htmlFor="roles" className="sr-only">
                    Select an option
                  </label>
                  <select
                    id="roles"
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                    name="role"
                    value={role}
                    onChange={onChange}
                    required
                  >
                    <option>Choose a Role</option>
                    <option value="Leader">Leader </option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
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
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  value={confirmPassword}
                  onChange={onChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
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
                {isLoading ? (
                  <Loader/>
                ) : (
                  <>Register</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
