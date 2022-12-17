import DescriptionBox from "./DescriptionBox";
import CommentBox from "./CommentBox";
import TaskDetails from "./TaskDetails";
import moment from "moment";
import AllComments from "../issues/AllComments";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getComments } from "../../features/comments/commentSlice";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { deleteIssue, reset } from "../../features/issues/issueSlice";
import { addAttachment } from "../../features/attachments/attachmentSlice";
import AttachmentBox from "./AttachmentBox";
import StatusBox from "./StatusBox";
import PriorityBox from "./PriorityBox";
import { BiShareAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function IssueDetails() {
  const [issue, project] = useOutletContext()
  const {issueId} = useParams()
  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)
  const [modalId, setModalId] = useState("")
  const imageRef = useRef();
  const dispatch = useDispatch()
  const onImageChange = (e) => {
    if (e.target.files.length > 0) {
      const attachmentData = {issue_id: issueId, user_id: user._id, attachments: e.target.files[0]}
      dispatch(addAttachment(attachmentData))
    }
  };
  const handleDelete = () => {
    const result = window.confirm("Are you sure you want to delete the issue?")
    if(result){
      dispatch(deleteIssue(issueId))
      // dispatch(reset())
      setModalId("#hs-vertically-centered-modal")
    }
  }

  // useEffect(() => {
  //   dispatch(getComments(issueId)) 
  // }, [issueId, dispatch])

  return (
    <div>
      {/* <!-- Main modal --> */}
      <div id="hs-vertically-centered-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-auto overflow-y-auto">
  <div className="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center">
        <div className="relative w-full max-w-6xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white p-5 rounded shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start mb-2 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-500 dark:text-white">
                {project.name}
              </h3>
              <div className=" flex gap-2 items-center">
              <button
                type="button"
                className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => handleDelete()}
                data-hs-overlay={modalId}
              >
                <RiDeleteBin6Line size={18}/>
                <span className="sr-only">delete issue</span>
              </button>
              <button
                type="button"
                className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
              <BiShareAlt size={18}/>
                <span className="sr-only">share</span>
              </button>
              <button
                type="button"
                className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 ml-auto inline-flex items-center"
                // onClick={() => navigate(-1)}
                data-hs-overlay="#hs-vertically-centered-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              </div>
            </div>
            {/* <!-- Modal body --> */}
            <div className="relative flex gap-6">
              <div className=" overflow-y-auto max-h-[67vh] space-y-2 p-2 w-4/6 ">
                <h1 className=" font-semibold text-xl">{issue?.summary}</h1>
                <div className="hidden">
                    <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
                  </div>
                <button onClick={()=>imageRef.current?.click()} className=" text-xs font-medium bg-slate-200 px-3 py-2 rounded hover:bg-slate-300">
                  <i className="fas fa-paperclip fa-lg"></i> Attach files
                </button>
                <div className="description">
                  <h1 className=" mt-4 mb-1 font-semibold text-sm">
                    Description
                  </h1>
                  <DescriptionBox issue={issue} />
                </div>
                {/* { attachments?.length > 0 && */}
                <div className="attachments w-full">
                  <AttachmentBox issueId={issueId} imageRef={imageRef}/>
                </div> 
                {/* } */}
                <div className="activity">
                  <h1 className=" mt-8 mb-1 font-semibold text-sm">Activity</h1>
                  <div className="mb-3 inline-flex items-center gap-3">
                    <h1 className=" font-normal text-sm">Show:</h1>
                    <button className=" text-sm font-medium bg-slate-200 px-2 py-1 rounded hover:bg-slate-300">
                      All
                    </button>
                    <button className=" text-sm font-medium text-white bg-slate-700 px-2 py-1 rounded hover:bg-slate-800">
                      Comments
                    </button>
                    <button className=" text-sm font-medium bg-slate-200 px-2 py-1 rounded hover:bg-slate-300">
                      History
                    </button>
                  </div>
                  <div className="flex space-x-1">
                    <img
                      className="inline-block h-8 w-8 mr-2 mt-1 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src={user?.profilePicture ? user?.profilePicture : "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"}
                      alt="Image Description"
                    />
                    <div className="w-full">
                      {issueId && <CommentBox user={user} issue={issue}/>}
                    </div>
                  </div>
                  <div className="mt-2">
                    {issueId && <AllComments issueId={issueId}/>}
                  </div>
                </div>
              </div>
              <div className=" space-y-3 p-2 w-2/6">
                <div className="status">
                  <StatusBox issue={issue}/>
                </div>
                <div className="details">
                  <TaskDetails issue={issue}/>
                </div>
                <div className="priority">
                  <PriorityBox issue={issue}/>
                </div>
                <div>
                <div className="timestamps bottom-0 space-y-1 p-3">
                  <h1 className=" text-xs mb-6 font-normal text-gray-500">
                    Due On <span className="font-semibold text-sm">{moment(issue.duedate).format('ll')}</span>
                  </h1>
                  <h1 className=" text-xs font-medium text-gray-500">
                    Created {moment(issue?.createdAt).startOf('day').fromNow()}
                  </h1>
                  <h1 className=" text-xs font-medium text-gray-500">
                    Updated {moment(issue?.updatedAt).startOf('hour').fromNow()}
                  </h1>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
