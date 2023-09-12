import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import LikedPosts from '../post/LikedPosts';
import UserPosts from '../post/UserPosts';
import EditProfile from './EditProfile';
import MyProjects from './MyProjects';

export default function ProfileMain({ profile }) {
  const data = [
    {
      label: 'Edit Profile',
      value: 'Edit Profile',
      component: <EditProfile profile={profile} />,
    },
    {
      label: 'Your Projects',
      value: 'Your Projects',
      component: <MyProjects />,
    },

    {
      label: 'Posts',
      value: 'Posts',
      component: <UserPosts userId={profile._id} />,
    },

    {
      label: 'Likes',
      value: 'Likes',
      component: <LikedPosts userId={profile._id} />,
    },
  ];

  return (
    <div className='w-full'>
      <Tabs value='Edit Profile'>
        <TabsHeader className='bg-slate-200 rounded-b-none'>
          {data.map(({ label, value }) => (
            <Tab className='text-teal-700 font-medium  p-1' key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, component }) => (
            <TabPanel key={value} value={value}>
              <div className=' max-h-[40rem] overflow-auto'>{component}</div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
