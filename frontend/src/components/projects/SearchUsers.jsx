export default function SearchUsers({ filteredUsers, setMembers, setSearchField }) {
  return (
    <div className={filteredUsers.length > 0 ? 'block' : 'hidden'}>
      <div
        className='hs-dropdown-menu transition-[opacity,margin] duration max-h-56 overflow-auto min-w-[20rem] bg-white border rounded-lg p-1 mt-0 divide-y divide-gray-200'
        aria-labelledby='hs-dropdown-with-icons'
      >
        {filteredUsers?.map((user) => (
          <div key={user._id} className='py-1 first:pt-0 last:pb-0'>
            <a
              className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
              onClick={() => {
                setMembers((prev) => [...prev, user]);
                setSearchField('');
              }}
            >
              <img
                className='w-7 h-7 rounded-full'
                src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                alt='Neil image'
              />
              {user.name}
            </a>
            {/* <button type="button" className="inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-teal-700 rounded-lg right-2 bottom-2 hover:bg-teal-800"><svg className="w-4 h-4 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>Add</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
