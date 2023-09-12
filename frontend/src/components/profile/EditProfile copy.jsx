import userPic from '../../assets/user.webp';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUser } from '../../features/auth/authSlice';
import { Alert } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user.name,
    id_no: user.id_no,
    password: '',
    confirmPassword: '',
  });
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);

  const { name, id_no, password, confirmPassword } = formData;

  useEffect(() => {
    if (isError) {
      setError(message);
    }
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate, isError, isSuccess, message, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Password do not match');
    } else {
      const userData = {
        name,
        id_no,
        password,
        profilePicture: profilePic,
      };
      if (userData.password !== '' || userData.profilePicture !== '') {
        dispatch(updateUser(userData));
        alert('User updated successfully.');
        if (isSuccess) {
          dispatch(logout());
          navigate('/login');
        }
      }
    }
    if (isSuccess && !isError) {
      setMsg('User updated successfully!');
    }
  };

  if (isLoading) {
    <div
      className='animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full'
      role='status'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>;
  }

  return (
    <div>
      <form className='min-w-full p-6' onSubmit={onSubmit}>
        <div className='relative '>
          <input
            type='text'
            id='floating_filled1'
            className='block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer'
            placeholder=' '
            name='name'
            value={name}
            onChange={onChange}
            required
          />
          <label
            for='floating_filled1'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Full Name
          </label>
        </div>
        <div className='relative '>
          <input
            type='text'
            id='floating_filled2'
            className='block rounded-none px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer'
            placeholder=' '
            name='id_no'
            value={id_no}
            onChange={onChange}
            required
          />
          <label
            for='floating_filled2'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            ID
          </label>
        </div>
        <div className='relative '>
          <input
            type='file'
            id='floating_filled3'
            className='block rounded-none px-2.5 pb-2 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer'
            name='profilePicture'
            onChange={(e) => setProfilePic(e.target.files[0])}
            // disabled
          />
          <label
            for='floating_filled3'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Upload Profile Picture
          </label>
        </div>
        <div className='relative '>
          <input
            type='email'
            id='floating_filled4'
            className='block rounded-none px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer'
            placeholder=' '
            name='email'
            value={user.email}
            disabled
          />
          <label
            for='floating_filled4'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Email
          </label>
        </div>
        <div className='relative '>
          <input
            type='password'
            id='floating_filled5'
            className='block rounded-none px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer'
            placeholder=' '
            name='password'
            value={password}
            onChange={onChange}
            // required
          />
          <label
            for='floating_filled5'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Password
          </label>
        </div>
        <div className='relative mb-4'>
          <input
            type='password'
            id='floating_filled6'
            className='block rounded-b-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer'
            placeholder=' '
            name='confirmPassword'
            value={confirmPassword}
            onChange={onChange}
            // required
          />
          <label
            for='floating_filled6'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
          >
            Repeat Password
          </label>
        </div>
        <button
          type='submit'
          className='text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
