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
import AppCard from '../../components/shared/AppCard';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { StripePay } from '@/utils/apiCalls';
moment.locale('en-GB');
const localizer = momentLocalizer(moment);

const Subscription = () => {
  const user = useSelector((state) => state.user);
  const [calevents, setCalEvents] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [slot, setSlot] = React.useState();
  const [start, setStart] = React.useState();
  const router = useRouter()
  const [end, setEnd] = React.useState();
  const [color, setColor] = React.useState('default');
  const [events, setEvents] = useState()
  const [update, setUpdate] = React.useState();
  function convertDateStringToDateObject(dateString) {
    // Assuming dateString is in the format "DD/MM"
    const [day, month] = dateString.split('/').map(Number);

    // Creating a new Date object with the current year
    const currentYear = new Date().getFullYear();

    // Note: Months in JavaScript are 0-indexed, so we subtract 1
    const dateObject = new Date(currentYear, month - 1, day, 0, 0);

    return dateObject;
  }

  const ColorVariation = [
    {
      id: 1,
      eColor: '#FFC800',
      value: 'default',
    },
    {
      id: 2,
      eColor: '#eda83b',
      value: 'secColor',
    }
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
    console.log(event, 'a')
    if (event.title > 0) {
      router.push(`/apps/view-all/${event.id}`)
    }
    else {
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
  const handleSubscribe = async () => {
    try {
      const response = await StripePay();
      if (response.data && response.data.data.CheckoutUrl) {
        // Open the CheckoutUrl in a new tab
        window.open(response.data.data.CheckoutUrl, '_blank');
    }
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <PageContainer title="Upgrade your plan" description="Upgrade your plan">
      <Breadcrumb title="Upgrade Your Plan" subtitle="Select from the following" />
      <AppCard className='centering'><Box className='boxSize'>
        <Typography className='heading' fontWeight={800}>Get 43Me now & stay organised </Typography>
        <Typography
          color={".main"}
          mt={1}
          variant="subtitle1"
          fontWeight={600}
          width='50%'
        >Full access : Get Access to your tickler file.
          Create And Manage unlimited tasks.
          Access from multiple devices</Typography>
        <BlankCard>

          <CardContent>
            <Box className='cardRocket'>
              <Box><Image
                src={"/images/rocket.png"}
                alt="bg" width={250} height={250}
                style={{
                  width: "100%",
                  // maxWidth: "500px",  maxHeight: '500px',
                }}
              /></Box>
              <Box>
                <Typography
                  color={".main"}
                  variant="subtitle1"
                  fontWeight={600}
                  fontSize={'18px'}
                >
                  Full Access
                </Typography>
                <Typography
                  color={".main"}
                  variant="subtitle1"
                  fontSize={'18px'}
                  fontWeight={600}
                >
                  One Month Subscription
                </Typography>
                <Typography
                  color={".main"}
                  variant="subtitle1"
                  fontSize={'18px'}
                  fontWeight={600}
                >
                  270.00
                </Typography></Box>
              <Box><Button className='subscribe' onClick={handleSubscribe}>Subscribe</Button></Box>
            </Box>
          </CardContent>
        </BlankCard>
        {/* <BlankCard>
       
        <CardContent>
          1 Year Plan
        </CardContent>
      </BlankCard> */}
      </Box></AppCard>
    </PageContainer>
  );
};

export default Subscription;
