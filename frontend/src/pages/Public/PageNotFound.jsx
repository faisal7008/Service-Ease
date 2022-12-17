import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate() 
  return (
    <div className='h-screen grid place-content-center'>
      {/* <h1 className='text-rose-600 text-4xl font-mono font-bold'>
          Sorry, No Page Found
      </h1> */}

<div className="flex items-center flex-col justify-center py-28 px-6 md:px-24 md:py-20 lg:py-16 gap-8">
            <div className="w-full">
                <img className="hidden w-96 lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
            </div>
            <div className="w-full grid justify-items-center">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white">Sorry, No page found</h1>
                <button onClick={() => navigate(-1)} className="w-full lg:w-auto my-4 rounded-md px-1 sm:px-8 py-4 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700">Go back</button>
            </div>
        </div>
    
    </div>
  )
}

export default PageNotFound