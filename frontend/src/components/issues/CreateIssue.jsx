import { useEffect } from 'react';
import { useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/users/userSlice';
import UserBox from './UserBox';
import { createIssue, reset } from '../../features/issues/issueSlice';
import { useParams } from 'react-router-dom';
import projectService from '../../features/projects/projectService';
import { addAttachment } from '../../features/attachments/attachmentSlice';
import { createNotification } from '../../features/notifications/notificationSlice';

export default function CreateIssue({ project }) {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  // const [project, setProject] = useState()
  const [modalId, setModalId] = useState('');
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const [assignee, setAssignee] = useState(null);
  const initialState = {
    project_id: projectId,
    creator_id: user._id,
    assignee_id: 'Unassigned',
    summary: '',
    description: '',
    priority: '',
    attachments: '',
    status: 'To Do',
    duedate: '',
  };
  // console.log(initialState)
  const [issueData, setIssueData] = useState(initialState);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  //   // projectService.getProject(projectId, user.token).then(res => setProject(res)).catch(err => console.log(err))
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createIssue(issueData));
    const notificationData = {
      toUser: issueData.assignee_id,
      fromUser: issueData.creator_id,
      message: `Task - ${issueData.summary} due on ${issueData.duedate}`,
    };
    console.log(notificationData);
    dispatch(createNotification(notificationData));
    dispatch(reset());
    setModalId('#create-issue');
    onClose();
  };

  const onClose = () => {
    setIssueData(initialState);
    setAssignee(null);
    setModalId('#create-issue');
  };

  // const onImageChange = (e) => {
  //   if (e.target.files.length > 0) {
  //     const attachmentData = {issue_id: issueId, user_id: user._id, attachments: e.target.files[0]}
  //     dispatch(addAttachment(attachmentData))
  //   }
  // };

  const filteredUsers = users.filter((user) => project?.members?.includes(user._id));

  return (
    <div>
      {/* <!-- Main modal --> */}
      <div
        id='create-issue'
        className='hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-auto overflow-y-auto'
      >
        <div className='hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center'>
          <div className='relative w-full max-w-3xl h-full md:h-auto'>
            {/* <!-- Modal content --> */}
            <div className='relative bg-white p-6 rounded shadow'>
              {/* <!-- Modal header --> */}
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-xl font-semibold text-gray-600'>Create issue</h3>
              </div>
              {/* <!-- Modal body --> */}
              <div className='relative mt-2 w-full h-full max-h-[75vh] overflow-y-auto flex '>
                <form
                  // onSubmit={handleSubmit}
                  className='w-full grid grid-cols-1'
                >
                  <div className='max-h-[75vh] px-1 my-4 overflow-auto'>
                    <div className='mb-4'>
                      <label htmlFor='project' className='block mb-2 text-xs font-semibold'>
                        Project <span className=' text-rose-600'>*</span>
                      </label>
                      <input
                        type='text'
                        id='project'
                        className='bg-gray-50 border border-gray-200 text-gray-900 font-semibold text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5'
                        value={project.name + ' (' + project.key + ')'}
                        readOnly
                      />
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='summary' className='block mb-2 text-xs font-semibold'>
                        Summary<span className=' text-rose-600'>*</span>
                      </label>
                      <textarea
                        id='summary'
                        onChange={(e) =>
                          setIssueData((prev) => {
                            return { ...prev, summary: e.target.value };
                          })
                        }
                        rows='1'
                        value={issueData.summary}
                        className='block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded border border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                        placeholder='Add summary...'
                        required
                      ></textarea>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='description' className='block mb-2 text-xs font-semibold '>
                        Description <span className=' text-rose-600'>*</span>
                      </label>
                      <textarea
                        id='description'
                        rows='4'
                        onChange={(e) =>
                          setIssueData((prev) => {
                            return { ...prev, description: e.target.value };
                          })
                        }
                        value={issueData.description}
                        className='block p-2.5 w-full text-sm resize-none text-gray-900 bg-gray-50 rounded border border-gray-200 focus:ring-teal-500 focus:border-teal-500'
                        placeholder='Add description...'
                        required
                      ></textarea>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='assignee1' className='block text-xs font-semibold mb-2 '>
                        Assignee<span className=' text-rose-600'>*</span>
                      </label>
                      <div id='assignee1' className='hs-dropdown w-full relative inline-block'>
                        <button
                          id='hs-dropdown-with-icons'
                          type='button'
                          className='hs-dropdown-toggle w-1/2 py-2 px-4 inline-flex justify-between items-center gap-2 rounded border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all text-sm '
                        >
                          {assignee ? <UserBox user={assignee} /> : 'Unassigned'}
                          <svg
                            className='hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                            />
                          </svg>
                        </button>

                        <div
                          className='hs-dropdown-menu z-30 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[22rem] border bg-white shadow rounded p-2 divide-y divide-gray-200'
                          aria-labelledby='hs-dropdown-with-icons'
                        >
                          <div className='py-2 max-h-44 overflow-auto first:pt-0 last:pb-0'>
                            {filteredUsers.map((user) => (
                              <button
                                key={user._id}
                                onClick={() => {
                                  setAssignee(user);
                                  setIssueData((prev) => {
                                    return { ...prev, assignee_id: user._id };
                                  });
                                }}
                                type='button'
                                className='flex items-center w-full gap-x-3.5 py-2 px-3 rounded text-sm text-rose-600 hover:bg-gray-100'
                              >
                                <UserBox user={user} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='reporter' className='block text-xs font-semibold mb-2 '>
                        Reporter<span className=' text-rose-600'>*</span>
                      </label>
                      <div id='reporter' className='hs-dropdown w-full relative inline-flex'>
                        <button
                          id='hs-dropdown-with-icons1'
                          type='button'
                          className='hs-dropdown-toggle w-1/2 py-2 px-4 inline-flex justify-between items-center gap-2 rounded border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all text-sm '
                        >
                          <UserBox user={user} />
                          <svg
                            className='hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                            />
                          </svg>
                        </button>

                        <div
                          className='hs-dropdown-menu z-20 relative transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[22rem] border bg-white shadow rounded p-2 divide-y divide-gray-200'
                          aria-labelledby='hs-dropdown-with-icons1'
                        >
                          <div className='py-2 max-h-44 overflow-auto first:pt-0 last:pb-0'>
                            <button
                              className='flex items-center w-full gap-x-3.5 py-2 px-3 rounded text-sm text-rose-600 hover:bg-gray-100'
                              type='button'
                            >
                              <UserBox user={user} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mb-4 w-1/2 grid grid-cols-2 gap-6'>
                      <div className='relative w-full'>
                        <label htmlFor='priority' className='block text-xs font-semibold mb-2 '>
                          Priority<span className=' text-rose-600'>*</span>
                        </label>
                        <div id='priority' className='hs-dropdown w-full relative inline-flex'>
                          <button
                            id='hs-dropdown-with-icons1'
                            type='button'
                            className='hs-dropdown-toggle w-full py-3 px-4 inline-flex justify-between items-center gap-2 rounded border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all text-sm '
                          >
                            {issueData.priority === '' && (
                              <span className='text-gray-800 inline-flex items-center gap-2'>
                                {' '}
                                Select Priority{' '}
                              </span>
                            )}
                            {issueData.priority === 'High' && (
                              <span className='text-rose-600 inline-flex items-center gap-2'>
                                <BsFillCircleFill /> High{' '}
                              </span>
                            )}
                            {issueData.priority === 'Medium' && (
                              <span className='text-yellow-500 inline-flex items-center gap-2'>
                                <BsFillCircleFill /> Medium{' '}
                              </span>
                            )}
                            {issueData.priority === 'Low' && (
                              <span className='text-green-600 inline-flex items-center gap-2'>
                                <BsFillCircleFill /> Low{' '}
                              </span>
                            )}
                            <svg
                              className='hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600'
                              width='16'
                              height='16'
                              viewBox='0 0 16 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                              />
                            </svg>
                          </button>

                          <div
                            className='hs-dropdown-menu z-10 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[13rem] bg-white shadow-md rounded p-2 divide-y divide-gray-200'
                            aria-labelledby='hs-dropdown-with-icons1'
                          >
                            <div className='py-2 first:pt-0 last:pb-0'>
                              <button
                                onClick={(e) =>
                                  setIssueData((prev) => {
                                    return { ...prev, priority: 'High' };
                                  })
                                }
                                type='button'
                                className='flex items-center w-full gap-x-3.5 py-2 px-3 rounded text-sm text-rose-600 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 '
                              >
                                <BsFillCircleFill /> High
                              </button>
                              <button
                                onClick={(e) =>
                                  setIssueData((prev) => {
                                    return { ...prev, priority: 'Medium' };
                                  })
                                }
                                type='button'
                                className='flex items-center w-full gap-x-3.5 py-2 px-3 rounded text-sm text-yellow-500 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 '
                              >
                                <BsFillCircleFill /> Medium
                              </button>
                              <button
                                onClick={(e) =>
                                  setIssueData((prev) => {
                                    return { ...prev, priority: 'Low' };
                                  })
                                }
                                type='button'
                                className='flex items-center w-full gap-x-3.5 py-2 px-3 rounded text-sm text-green-600 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 '
                              >
                                <BsFillCircleFill /> Low
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='relative w-full'>
                        <label htmlFor='duedate' className='block text-xs font-semibold mb-2 '>
                          Due date<span className=' text-rose-600'>*</span>
                        </label>
                        <input
                          type='date'
                          onChange={(e) =>
                            setIssueData((prev) => {
                              return { ...prev, duedate: e.target.value };
                            })
                          }
                          id='duedate'
                          value={issueData.duedate}
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full py-3 px-4 '
                          placeholder='Select date'
                        />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <label htmlFor='attactments' className='block text-xs font-semibold mb-2 '>
                        Attachments
                      </label>
                      <div id='attachment' className='flex items-center justify-center w-full'>
                        <label
                          htmlFor='dropzone-file'
                          className='flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 border-dashed rounded cursor-pointer bg-gray-50'
                        >
                          <div className='flex items-center justify-center pt-5 pb-6'>
                            <svg
                              aria-hidden='true'
                              className='w-7 h-7 text-gray-400'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                              ></path>
                            </svg>
                            <p className='ml-2 text-sm text-gray-500 dark:text-gray-400'>
                              <span className='font-semibold'>Click to upload</span> or drag and
                              drop
                            </p>
                          </div>
                          <input
                            id='dropzone-file'
                            type='file'
                            // onChange={(e) => onImageChange(e)}
                            className='hidden'
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      onClick={() => onClose()}
                      className='text-gray-800 bg-white hover:bg-gray-200 font-medium rounded text-sm px-5 py-2.5 mr-2'
                      data-hs-overlay={modalId}
                    >
                      {' '}
                      cancel
                    </button>
                    <button
                      type='submit'
                      onClick={handleSubmit}
                      className='text-white bg-teal-700 hover:bg-teal-800 font-medium rounded text-sm px-5 py-2.5 mr-2'
                      data-hs-overlay={modalId}
                    >
                      {' '}
                      create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
