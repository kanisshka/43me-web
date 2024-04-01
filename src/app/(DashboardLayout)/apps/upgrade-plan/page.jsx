'use client';

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import Events from '@/app/(DashboardLayout)/EventData';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import axios from 'axios';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import { IconCheck } from '@tabler/icons-react';
import BlankCard from '@/app/(DashboardLayout)/components/shared/BlankCard';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const Subscription = () => {
  const [calevents, setCalEvents] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [slot, setSlot] = React.useState();
  const [start, setStart] = React.useState();
  const router = useRouter()
  const [end, setEnd] = React.useState();
  const [color, setColor] = React.useState('default');
  const[events,setEvents] = useState()
  const [update, setUpdate] = React.useState();
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDc1ZjYzNTBiNjljMDVlYjYzMGMxNyIsInRva2VuX2NyZWF0aW9uX2RhdGUiOiIyMDI0LTAxLTI0VDA3OjU3OjA2KzAwOjAwIiwiaWF0IjoxNzA2MDgzMDI2fQ.eoSRnOjskhyoXEAiXRAk3ZkOZ5uNK6t8-FxmYr76nAk"
  function convertDateStringToDateObject(dateString) {
    // Assuming dateString is in the format "DD/MM"
    const [day, month] = dateString.split('/').map(Number);
  
    // Creating a new Date object with the current year
    const currentYear = new Date().getFullYear();
  
    // Note: Months in JavaScript are 0-indexed, so we subtract 1
    const dateObject = new Date(currentYear, month - 1, day, 0, 0);
  
    return dateObject;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP}/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Handle the response data here
        console.log(response.data.data);
        const transformedEvents = response.data.data[0].data.map((event) => ({
          title: event.count ,
          start: convertDateStringToDateObject(event.date),
          end:convertDateStringToDateObject(event.date),
          color: event.countColorBG,
          id: event.id,
        }));
        console.log(transformedEvents,'ss')
        setCalEvents(transformedEvents)
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [])

  const ColorVariation = [
    {
      id: 1,
      eColor: '#FFC800',
      value: 'default',
    },
    {
      id: 2,
      eColor: '#eda83b',
      value: 'secColor',}
    // },
    // {
    //   id: 3,
    //   eColor: '#fc4b6c',
    //   value: 'red',
    // },
    // {
    //   id: 4,
    //   eColor: '#615dff',
    //   value: 'azure',
    // },
    // {
    //   id: 5,
    //   eColor: '#fdd43f',
    //   value: 'warning',
    // },
  ];
  const addNewEventAlert = (slotInfo) => {
    setOpen(true);
    setSlot(slotInfo);
    setStart(slotInfo.start);
    setEnd(slotInfo.end);
  };

  const editEvent = (event) => {
    console.log(event,'a')
    if(event.title>0){
    router.push(`/apps/view-all/${event.id}`)}
    else{
      setOpen(true)
    }
    // setOpen(true);
    // const newEditEvent = calevents.find((elem) => elem.title === event.title);
    // setColor(event.color);
    // setTitle(newEditEvent.title);
    // setColor(newEditEvent.color);
    // setStart(newEditEvent.start);
    // setEnd(newEditEvent.end);
    // setUpdate(event);
  };

  const updateEvent = (e) => {
    e.preventDefault();
    setCalEvents(
      calevents.map((elem) => {
        if (elem.title === update.title) {
          return { ...elem, title, start, end, color };
        }

        return elem;
      }),
    );
    setOpen(false);
    setTitle('');
    setColor('');
    setStart('');
    setEnd('');
    setUpdate(null);
  };
  const inputChangeHandler = (e) => setTitle(e.target.value);
  const selectinputChangeHandler = (id) => setColor(id);

  const submitHandler = (e) => {
    e.preventDefault();
    const newEvents = calevents;
    newEvents.push({
      title,
      start,
      end,
      color,
    });
    setOpen(false);
    e.target.reset();
    setCalEvents(newEvents);
    setTitle('');
    setStart(new Date());
    setEnd(new Date());
  };
  const deleteHandler = (event) => {
    const updatecalEvents = calevents.filter((ind) => ind.title !== event.title);
    setCalEvents(updatecalEvents);
  };

  const handleClose = () => {
    // eslint-disable-line newline-before-return
    setOpen(false);
    setTitle('');
    setStart(new Date());
    setEnd(new Date());
    setUpdate(null);
  };

  const eventColors = (event) => {
    if (event.color) {
      return { className: `event-${event.color}` };
    }

    return { className: `event-default` };
  };

  const handleStartChange = (newValue) => {
    setStart(newValue);
  };
  const handleEndChange = (newValue) => {
    setEnd(newValue);
  };

  return (
    <PageContainer title="Upgrade your plan" description="Upgrade your plan">
      <Breadcrumb title="Upgrade Your Plan" subtitle="Select from the following" />
      <Box className='boxSize'>
      <Typography
                color={".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >Full access : Get Access to your tickler file.
              Create And Manage unlimited tasks. 
              Access from multiple devices</Typography>
      <BlankCard>
       
        <CardContent>
          1 Month Plan
          <Typography
                color={".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              ></Typography>
        </CardContent>
      </BlankCard>
      <BlankCard>
       
        <CardContent>
          1 Year Plan
        </CardContent>
      </BlankCard></Box>
    </PageContainer>
  );
};

export default Subscription;
