import UserLogo from '../../assets/user.webp'

export default function Community() {
  return (
    <main className="messenger flex min-h-screen">
        <div className="chatMenu w-3/12 border-2 ">
          <div className="chatMenuWrapper">
          {/* <h1 className="font-mono text-2xl font-semibold text-slate-900">Community Page</h1> */}

<div class="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Friends</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

          </div>
        </div>
        <div className="chatBox w-6/12 border-2">
          <div className="chatBoxWrapper flex flex-col min-h-screen">
            <div className='display grow border-2 m-1 p-2'> 
                <div className='grid space-y-2'>
                <div className='sender w-max px-3 py-4 rounded-xl'>
                    
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={UserLogo} alt="Neil image"/>
                    </div>
                    <div class="flex-1 max-w-md">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Faisal <span className='ml-2 text-xs text-gray-500'>9:00 PM</span>
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, non! Non sed labore, magni laudantium impedit iure illo corporis dignissimos maxime quaerat expedita hic rem totam magnam saepe laboriosam eos.
                        </p>
                    </div>
                </div>
                </div>
                <div className='reciever  w-max px-3 py-4 rounded-xl'>
                <div class="flex items-start space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={UserLogo} alt="Neil image"/>
                    </div>
                    <div class="flex-1 max-w-md">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Aquib <span className='ml-2 text-xs text-gray-500'>9:02 PM</span>
                        </p>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam officia aperiam, explicabo rerum quia, cum veritatis in porro pariatur perspiciatis enim sit ratione ad unde vel necessitatibus dignissimos deleniti!
                        </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className='display h-12 border-2 m-1 p-2'>
                b
            </div>
          </div>
        </div>
        <div className="chatOnline w-3/12 border-2">
          <div className="chatOnlineWrapper">
            
          </div>
        </div>
    </main>
  )
}
