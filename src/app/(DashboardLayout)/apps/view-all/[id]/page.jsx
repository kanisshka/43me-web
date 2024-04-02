'use client';

import { useEffect, useState } from 'react';
import { Box, CardContent, Grid, Typography, List } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import Button from '@mui/material/Button';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import ContactDetails from '@/app/(DashboardLayout)/components/apps/contacts/ContactDetails';
import ContactList from '@/app/(DashboardLayout)/components/apps/contacts/ContactList';
import ContactSearch from '@/app/(DashboardLayout)/components/apps/contacts/ContactSearch';
import ContactFilter from '@/app/(DashboardLayout)/components/apps/contacts/ContactFilter';
import AppCard from '@/app/(DashboardLayout)/components/shared/AppCard';
import OneDayList from '../../../layout/vertical/sidebar/OneDayList';
import CalenderList from '../../../layout/vertical/sidebar/CalenderList';
const drawerWidth = 240;
const secdrawerWidth = 320;
import TaskPanel from '../../../components/dashboards/modern/TaskPanel';
const ViewAll = ({params}) => {
  // const router = useRouter()
  // console.log(params.id,'aa')
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDc1ZjYzNTBiNjljMDVlYjYzMGMxNyIsInRva2VuX2NyZWF0aW9uX2RhdGUiOiIyMDI0LTAxLTI0VDA3OjU3OjA2KzAwOjAwIiwiaWF0IjoxNzA2MDgzMDI2fQ.eoSRnOjskhyoXEAiXRAk3ZkOZ5uNK6t8-FxmYr76nAk"

  const handleMenuItemClick = () => {
    setSelectedMenuItem(true);
    console.log(selectedMenuItem)
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        is_month:false,
        date:'2024-04-02'
      }
      console.log(data,"first")
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP}/task-by-date`, data ,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Handle the response data here
        console.log(response,'res');
    
      
        // setCalEvents(transformedEvents)
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [])
  
  const Menuitems = [
    // {
    //   navlabel: false,
    //   subheader: "Home",
    // },

    {
      id: 1,
      weekday: 'Testing1',
      // icon: IconAperture,
      date: '08.01.',
      // chip: "New",
      count: 6,
    },
    {
      id: 2,
      weekday: 'Testing1',
      // icon: IconAperture,
      date: '09.01.',
      // chip: "New",
      count: 1,
    },
    // {
    //   navlabel: true,
    //   subheader: "Apps",
    // },
    {
      id: 3,
      weekday: 'Testing1',
      // icon: IconAperture,
      date: '10.01.',
      // chip: "New",
      count: 2,
    },

    {
      id: 4,
      weekday: 'Testing1',
      // icon: IconAperture,
      date: '11.01.',
      // chip: "New",
      count: 2,
    },
    {
      id: 5,
      weekday: 'Testing1',
      // icon: IconAperture,
      date: '12.01.',
      // chip: "New",
      count: 4,
    },
    {
      id: 6,
      weekday: 'Testing1',
      // icon: IconAperture,
      date: '13.01.',
      // chip: "New",
      count: 4,
    }
  ];
  const CalenderItems = [
    // {
    //   navlabel: false,
    //   subheader: "Home",
    // },

    {
      id: 1,
      weekday: 'January',
      date: '01',
      // icon: IconAperture,
      // chip: "New",
      count: 6,
    },
    {
      id: 2,
      weekday: 'February',
      // icon: IconAperture,
      date: '02',
      // chip: "New",
      count: 1,
    },
    // {
    //   navlabel: true,
    //   subheader: "Apps",
    // },
    {
      id: 3,
      weekday: 'March',
      // icon: IconAperture,
      date: '03',
      // chip: "New",
      count: 2,
    },

    {
      id: 4,
      weekday: 'April',
      // icon: IconAperture,
      date: '04',
      // chip: "New",
      count: 2,
    },
    {
      id: 5,
      weekday: 'May',
      // icon: IconAperture,
      date: '05',
      // chip: "New",
      count: 4,
    },
    {
      id: 6,
      weekday: 'June',
      date: '06',
      // icon: IconAperture,
    
      // chip: "New",
      count: 4,
    }
  ];
  return (
    <PageContainer title="Task List" description="this is Contact">
      {/* <Breadcrumb title="Task List" subtitle="List Your Tasks" /> */}
      <AppCard >
      <div className='flexText'>
      <div className='flexi'> 
      <div className='flexText width50'>
        <Typography m={1} variant="subtitle1" fontWeight={600}>
          Tasks
        </Typography>
          <Typography m={1} variant="subtitle2" fontWeight={600}>OPEN(6)</Typography>
     
          
          <Box sx={{ px: 2 }} >
            <List sx={{ pt: 0 }} onClick={() => handleMenuItemClick()} >
              {Menuitems.map((item) => (
                <OneDayList item={item} key={item.id} />
              ))}
            </List>
          </Box>
          </div>
          <Box sx={{ px: 2 }} className="width50">
          {selectedMenuItem ? <Box sx={{ px: 2 }} className='boxBorder'>
           <TaskPanel />
            </Box> : <Box sx={{ px: 2 }} className='boxBorder'>
            {/* <List sx={{ pt: 0 }} >
              {CalenderItems.map((item) => (
                <CalenderList item={item} key={item.id} />
              ))}
            </List> */}
            <ArticleIcon className='iconTask'/>
            <Typography m={1} variant="subtitle2" fontWeight={500} className='iconText'>No Task Selected</Typography>
            </Box>}
          </Box>
          </div>
        {/* ------------------------------------------- */}
        {/* Left Part */}
        {/* ------------------------------------------- */}

        {/* <Drawer
          open={isLeftSidebarOpen}
          onClose={() => setLeftSidebarOpen(false)}
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, position: 'relative', zIndex: 2 },
            flexShrink: 0,
          }}
          variant={lgUp ? 'permanent' : 'temporary'}
        >
          <ContactFilter />
        </Drawer> */}
        {/* ------------------------------------------- */}
        {/* Middle part */}
        {/* ------------------------------------------- */}
        {/* <Box
          sx={{
            minWidth: secdrawerWidth,
            width: { xs: '100%', md: secdrawerWidth, lg: secdrawerWidth },
            flexShrink: 0,
          }}
        >
          <ContactSearch onClick={() => setLeftSidebarOpen(true)} />
          <ContactList showrightSidebar={() => setRightSidebarOpen(true)} />
        </Box> */}
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}
        {/* <Drawer
          anchor="right"
          open={isRightSidebarOpen}
          onClose={() => setRightSidebarOpen(false)}
          variant={mdUp ? 'permanent' : 'temporary'}
          sx={{
            width: mdUp ? secdrawerWidth : '100%',
            zIndex: lgUp ? 0 : 1,
            flex: mdUp ? 'auto' : '',
            [`& .MuiDrawer-paper`]: { width: '100%', position: 'relative' },
          }}
        >
          {/* back btn Part 
          {mdUp ? (
            ''
          ) : (
            <Box sx={{ p: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => setRightSidebarOpen(false)}
                sx={{ mb: 3, display: { xs: 'block', md: 'none', lg: 'none' } }}
              >
                Back{' '}
              </Button>
            </Box>
          )}
          <ContactDetails />
        </Drawer> */}
        </div>
      </AppCard>
    </PageContainer>
  );
};
// export const getServerSideProps = async ({ params }) => {
//   const id = params.id;
//   // const response = await uniqueSubTrainerPage(id);


//   return {
//     props: {
//       id:id
//       // discoversingle:response,
//     },
//   };
// };
export default ViewAll;
