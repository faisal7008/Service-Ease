import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAttachments } from "../../features/attachments/attachmentSlice";

export default function AttachmentBox({ issueId, imageRef }) {
  const { attachments } = useSelector((state) => state.attachments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAttachments(issueId));
    // console.log(attachments);
  }, [issueId, dispatch]);
  return (
    <>
      {attachments?.length > 0 ? (
        <div>
          <div className="flex items-center justify-between">
            <h1 className=" mt-4 mb-2 font-semibold text-sm">
              Attachments {"(" + attachments?.length + ")"}
            </h1>
            <div className="flex">
              <button className="mt-3 mr-2 p-0.5 rounded hover:bg-slate-100 hover:text-teal-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button
                className="mt-3 mr-3 p-0.5 rounded hover:bg-slate-100 hover:text-teal-500"
                onClick={() => imageRef.current?.click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-[97%] overflow-x-auto">
            <div className="grid grid-flow-col gap-2 w-max ">
              {attachments?.map((attachment) => (
                <div key={attachment} className="previewImage">
                  <img className="h-40" src={attachment.file_path} alt="" />
                  {/* <p className="text-sm font-medium -mt-5 ml-1 bg-slate-50 absolute">{image.img.name}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
