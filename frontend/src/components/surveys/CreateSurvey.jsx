import { Button } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BiBookAdd } from 'react-icons/bi';
import { FcSurvey } from 'react-icons/fc';
import { GrAddCircle } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { createNotification } from '../../features/notifications/notificationSlice';
import { createProject } from '../../features/projects/projectSlice';
import { createSurvey } from '../../features/surveys/surveySlice';
import { getAllUsers } from '../../features/users/userSlice';
import SearchUsers from '../projects/SearchUsers';

export default function CreateSurvey() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [expirydate, setExpirydate] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const addQuestion = () => {
    if (question !== '') {
      setQuestion((ques) => ques.trimEnd);
      if (!questions.includes(question)) {
        setQuestions((prev) => [...prev, question]);
      }
    }
    setQuestion('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const surveyData = {
      name,
      questions,
      expirydate,
    };
    dispatch(createSurvey(surveyData));
  };

  return (
    <div>
      <div
        id='hs-vertically-centered-modal'
        className='hs-overlay hidden w-full h-full fixed -top-5 left-0 z-[60] overflow-x-hidden overflow-y-auto'
      >
        <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center'>
          <div className='relative flex px-5 py-4 flex-col max-h-[80vh] w-11/12 lg:w-2/5 bg-white border shadow-sm rounded h-5/6'>
            <div className='flex justify-between mb-4'>
              <h1 className='font-semibold tracking-wide text-slate-800 text-xl'>Start a survey</h1>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-hs-overlay='#hs-vertically-centered-modal'
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <form className='w-full' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  for='title'
                  className='block mb-2 text-xs font-semibold text-gray-900 dark:text-white'
                >
                  Survey title <span className=' text-rose-600'>*</span>
                </label>
                <input
                  type='text'
                  id='title'
                  onChange={(e) => setName(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
                  placeholder='Survey title'
                  required
                />
              </div>
              <div className='mb-4'>
                <label
                  for='expirydate'
                  className='block mb-2 text-xs font-semibold text-gray-900 dark:text-white'
                >
                  Due on <span className=' text-rose-600'>*</span>
                </label>
                <input
                  type='date'
                  id='expirydate'
                  onChange={(e) => setExpirydate(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
                  placeholder='Survey title'
                  required
                />
              </div>
              <div className='mb-4 relative'>
                <label
                  for='question'
                  className='block mb-2 text-xs font-semibold text-gray-900 dark:text-white'
                >
                  {' '}
                  Add questions <span className=' text-rose-600'>*</span>
                </label>
                <textarea
                  id='question'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows='3'
                  className='block p-2.5 pr-16 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-teal-500 focus:border-teal-500'
                  placeholder='Type a question...'
                ></textarea>
                <button
                  type='button'
                  onClick={() => addQuestion()}
                  className='absolute top-8 right-0 text-white inline-flex justify-center items-center bg-teal-600 hover:bg-teal-800 focus:ring-2 focus:ring-teal-300 font-medium rounded text-sm px-3 py-1.5 mr-2'
                >
                  {' '}
                  add
                </button>
              </div>

              <div className='mb-4 w-full max-h-[10rem] overflow-auto flex flex-col gap-2'>
                {questions &&
                  questions.map((ques) => (
                    <div
                      key={ques}
                      className='flex items-center border px-2 py-1.5 bg-gray-200 w-full rounded'
                    >
                      {/* <div className='inline-flex items-center w-full space-x-2'> */}
                      <p className='text-sm font-medium text-gray-900'>{ques}</p>
                      <button
                        type='button'
                        className='text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center'
                        onClick={() =>
                          setQuestions((prev) => prev.filter((question) => question !== ques))
                        }
                      >
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clip-rule='evenodd'
                          ></path>
                        </svg>
                        <span className='sr-only'>remove member</span>
                      </button>
                      {/* </div> */}
                    </div>
                  ))}
              </div>
              <button
                type='submit'
                className='text-white inline-flex justify-center items-center bg-teal-700 hover:bg-teal-800 w-full focus:ring-4 focus:ring-teal-300 font-medium rounded text-sm px-5 py-2.5 mr-2'
              >
                <span className='mr-2'>
                  <FcSurvey size={18} />
                </span>{' '}
                Start
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
