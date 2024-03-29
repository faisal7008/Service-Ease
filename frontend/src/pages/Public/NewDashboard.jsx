import React from 'react';
import { Link } from 'react-router-dom';
import { TbFolders } from 'react-icons/tb';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { FaUsers, FaNetworkWired, FaHandshake } from 'react-icons/fa';
import { BsFolderFill } from 'react-icons/bs';
import { CgCommunity } from 'react-icons/cg';

export default function NewDashboard(props) {
  const navigation = [
    {
      name: 'Dashboard',
      href: '/leadership/dashboard',
      icon: <AiFillHome size={18} />,
      current: true,
    },
    {
      name: 'Projects',
      href: '/leadership/projects',
      icon: <BsFolderFill size={18} />,
      current: false,
    },
    { name: 'Teams', href: '/leadership/teams', icon: <FaHandshake size={18} />, current: false },
    {
      name: 'Community',
      href: '/leadership/community',
      icon: <FaUsers size={18} />,
      current: true,
    },
  ];

  //   const { navigation, user, onLogout } = props;

  const userNavigation = [
    { name: 'Your Profile', href: `/leadership/profile` },
    { name: 'Settings', href: '#' },
    // { name: "Logout", onLogout: onLogout },
  ];

  return (
    <div>
      <div className='bg-gray-50 dark:bg-slate-900'>
        {/* <!-- ========== HEADER ========== --> */}
        <header className='sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-3 lg:pl-0 dark:bg-gray-800 dark:border-gray-700'>
          <nav
            className='flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8'
            aria-label='Global'
          >
            <div className='mr-5 lg:mr-0 lg:hidden'>
              <a
                className='flex-none text-xl font-semibold dark:text-white'
                href='#'
                aria-label='Brand'
              >
                Brand
              </a>
            </div>

            <div className='w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3'>
              <div className='sm:hidden'>
                <button
                  type='button'
                  className='inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
                >
                  <svg
                    className='w-3.5 h-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                  </svg>
                </button>
              </div>

              <button
                type='button'
                className='inline-flex justify-center items-center text-gray-500 hover:text-gray-600'
                data-hs-overlay='#application-sidebar'
                aria-controls='application-sidebar'
                aria-label='Toggle navigation'
              >
                <span className='sr-only'>Toggle Navigation</span>
                <svg
                  className='w-6 h-6'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
                <span className='ml-2 text-slate-900 font-mono font-semibold text-xl'>
                  Community
                </span>
              </button>

              <div className='hidden sm:block'>
                <label for='icon' className='sr-only'>
                  Search
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4'>
                    <svg
                      className='h-4 w-4 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='icon'
                    name='icon'
                    className='py-2 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                    placeholder='Search'
                  />
                </div>
              </div>

              <div className='flex flex-row items-center justify-end gap-2'>
                <button
                  type='button'
                  className='inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
                >
                  <svg
                    className='w-3.5 h-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
                  </svg>
                </button>
                <button
                  type='button'
                  className='hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
                  data-hs-offcanvas='#hs-offcanvas-right'
                >
                  <svg
                    className='w-3.5 h-3.5'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z' />
                    <path d='M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                  </svg>
                </button>

                <div className='hs-dropdown relative inline-flex [--placement:bottom-right]'>
                  <button
                    id='hs-dropdown-with-header'
                    type='button'
                    className='hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
                  >
                    <img
                      className='inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800'
                      src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80'
                      alt='Image Description'
                    />
                  </button>

                  <div
                    className='hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700'
                    aria-labelledby='hs-dropdown-with-header'
                  >
                    <div className='py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700'>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>Signed in as</p>
                      <p className='text-sm font-medium text-gray-800 dark:text-gray-300'>
                        james@site.com
                      </p>
                    </div>
                    <div className='mt-2 py-2 first:pt-0 last:pb-0'>
                      {userNavigation.map((item) => (
                        <Link
                          to={item.href}
                          onClick={item.onLogout}
                          className='flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'
                        >
                          <svg
                            className='flex-none'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='currentColor'
                          >
                            <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
                          </svg>
                          {item.name}
                        </Link>
                      ))}

                      {/* <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  Purchases
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                  </svg>
                  Downloads
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-teal-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                  <svg className="flex-none" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                  Team Account
                </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* <!-- ========== END HEADER ========== --> */}

        {/* <!-- ========== MAIN CONTENT ========== --> */}
        {/* <!-- Sidebar Toggle --> */}
        <div className='sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex items-center py-4'>
            {/* <!-- Navigation Toggle --> */}
            <button
              type='button'
              className='text-gray-500 hover:text-gray-600'
              data-hs-overlay='#application-sidebar'
              aria-controls='application-sidebar'
              aria-label='Toggle navigation'
            >
              <span className='sr-only'>Toggle Navigation</span>
              <svg
                className='w-5 h-5'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </button>
            {/* <!-- End Navigation Toggle --> */}

            {/* <!-- Breadcrumb --> */}
            <ol
              className='ml-3 flex items-center whitespace-nowrap min-w-0'
              aria-label='Breadcrumb'
            >
              <li className='flex items-center text-sm text-gray-800 dark:text-gray-400'>
                Application Layout
                <svg
                  className='flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600'
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </svg>
              </li>
              <li
                className='text-sm font-semibold text-gray-800 truncate dark:text-gray-400'
                aria-current='page'
              >
                Dashboard
              </li>
            </ol>
            {/* <!-- End Breadcrumb --> */}
          </div>
        </div>
        {/* <!-- End Sidebar Toggle --> */}

        {/* <!-- Sidebar --> */}

        <div
          id='application-sidebar'
          className='hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y [--body-scroll:true] [--overlay-backdrop:false]'
        >
          <div className='px-6'>
            <a
              className='flex-none text-xl font-semibold dark:text-white'
              href='#'
              aria-label='Brand'
            >
              Brand
            </a>
          </div>

          <nav
            className='hs-accordion-group p-6 w-full flex flex-col flex-wrap'
            data-hs-accordion-always-open
          >
            <ul className='space-y-1.5'>
              {navigation.map((item) => (
                <li>
                  <Link
                    to={item.href}
                    className={
                      item.current
                        ? 'flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100'
                        : 'flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100'
                    }
                  >
                    {/* <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg> */}
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* 
        <li className="hs-accordion" id="projects-accordion">
          <a className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-teal-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white" href="javascript:;">
            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
            </svg>
            Projects

            <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>

            <svg className="hs-accordion-active:hidden ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </a>

          <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
            <ul className="pt-2 pl-2">
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Link 1
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Link 2
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300" href="javascript:;">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </li> */}
            </ul>
          </nav>
        </div>
        {/* </div> */}
        {/* <!-- End Sidebar --> */}

        {/* <!-- Content --> */}
        <div className='w-full px-4 sm:px-6 md:px-0 lg:pl-0'>
          {/* <!-- Page Heading --> */}
          {/* <Community/> */}
          {/* <!-- End Page Heading --> */}
        </div>
        {/* <!-- End Content --> */}
        {/* <!-- ========== END MAIN CONTENT ========== --> */}
      </div>
    </div>
  );
}
