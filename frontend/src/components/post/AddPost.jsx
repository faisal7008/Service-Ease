import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/posts/postSlice";
import { HiPhotograph } from "react-icons/hi";

export default function AddPost() {
  const { user } = useSelector((state) => state.auth);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const [modalId, setModalId] = useState("");

  useEffect(() => {}, [modalId]);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        img: img,
        image: URL.createObjectURL(img),
      });
    }
  };

  const clearData = () => {
    setImage(null);
    setDesc("");
    setModalId("#create-post");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      userId: user._id,
      desc: desc,
      image: image.img,
    };

    dispatch(createPost(postData));
    clearData();
  };

  return (
    <div
      id="create-post"
      class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="relative w-full max-w-md h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="px-5 py-4">
              <div className="flex mb-4 items-center justify-center">
                <h3 className=" text-xl font-medium text-gray-900 dark:text-white">
                  Share a post
                </h3>
                <button
                  type="button"
                  className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  onClick={() => clearData()}
                  data-hs-overlay={modalId}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label for="desc" className="sr-only">
                    Your desc
                  </label>
                  <textarea
                    id="desc"
                    rows="4"
                    className="p-3 w-full text-sm text-gray-900 bg-gray-50 border-2 rounded-md focus:border-teal-500 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write about your post..."
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    required
                  ></textarea>
                </div>
                <div className="flex px-2 font-medium text-base font-sans justify-between">
                  <div
                    className="text-teal-500 inline-flex gap-2 items-center cursor-pointer"
                    onClick={() => imageRef.current.click()}
                  >
                    <i className="fas fa-image"></i> Photo
                  </div>
                  <div className="text-teal-500 inline-flex gap-2 items-center cursor-pointer">
                    <i className="fas fa-video"></i> Video
                  </div>{" "}
                  <div className="text-teal-500 inline-flex gap-2 items-center cursor-pointer">
                    <i className="fas fa-map-marker-alt"></i> Location
                  </div>{" "}
                  {/* <div className="text-teal-500">
            Shedule
          </div> */}
                  <div className="hidden">
                    <input
                      type="file"
                      name="myImage"
                      ref={imageRef}
                      onChange={onImageChange}
                    />
                  </div>
                </div>
                {image && (
                  <div className="previewImage">
                    <div
                      className=" absolute right-10 mt-1 cursor-pointer hover:text-teal-500"
                      onClick={() => setImage(null)}
                    >
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
                    </div>
                    <img src={image.image} alt="" />
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                  data-hs-overlay={modalId}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
