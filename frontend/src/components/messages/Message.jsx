import UserLogo from "../../assets/user.webp";

export default function Message() {
  return (
    <>
      <div className="display grow shadow-sm bg-gray-50 rounded-t-xl border-gray-900 m-1 p-2">
        <div className="grid space-y-1">
          <div className="sender w-max px-3 py-4">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src={UserLogo}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 max-w-md">
                <p class="text-sm font-medium text-gray-900 truncate ">
                  Faisal{" "}
                  <span className="ml-2 text-xs text-gray-500">9:00 PM</span>
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quod, non! Non sed labore, magni laudantium impedit iure illo
                  corporis dignissimos maxime quaerat expedita hic rem totam
                  magnam saepe laboriosam eos.
                </p>
              </div>
            </div>
          </div>
          <div className="reciever w-max px-3 py-4 rounded-xl">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-8 h-8 rounded-full"
                  src={UserLogo}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 max-w-md">
                <p class="text-sm font-medium text-gray-900 truncate">
                  Aquib{" "}
                  <span className="ml-2 text-xs text-gray-500">9:02 PM</span>
                </p>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  magnam officia aperiam, explicabo rerum quia, cum veritatis in
                  porro pariatur perspiciatis enim sit ratione ad unde vel
                  necessitatibus dignissimos deleniti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display rounded-xl mb-1 mx-1">
        <form>
          <label for="chat" class="sr-only">
            Your message
          </label>
          <div class="flex items-center py-2 px-3 bg-gray-50 rounded-b-xl dark:bg-gray-700">
            <button
              type="button"
              class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <i class="fas fa-paperclip fa-lg"></i>
              <span class="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              rows="1"
              class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Your message..."
            ></textarea>
            <button
              type="submit"
              class="inline-flex justify-center p-2 text-teal-600 rounded-full cursor-pointer hover:bg-teal-100 dark:text-teal-500 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span class="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
