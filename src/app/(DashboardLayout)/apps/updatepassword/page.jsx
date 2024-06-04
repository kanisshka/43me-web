'use client';
import React, { useState } from 'react';
import Breadcrumb from '../../layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../components/container/PageContainer';
import AppCard from '../../components/shared/AppCard';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment-timezone';
import { UpdatePassword } from '@/utils/apiCalls';
import { setUser } from '@/store/user/userSlice';
import { useRouter } from 'next/navigation';
// import Box from '@mui/material'
import AuthRoute from '../../layout/vertical/sidebar/AuthRoute';
const UpdatePassword1 = () => {
  const router = useRouter();
  // const moment = require('moment-timezone');
  const dispatch = useDispatch();
  function getCurrentTimezone() {
    return moment.tz.guess();
  }
  const user = useSelector((state) => state.user);
//   console.log(user, 'user');
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [mob, setmob] = useState();
  const handleFirstNameChange = (event) => {
    setfirst(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setlast(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
//   console.log(last,email)

  const handleSubmit = async () => {
    // console.log(last,email)

    if (last !== email) {
      setError('Password didnt Match!');
    //   console.log(last,email)
    } else {
      const params = {
        current_password: first,
        password: last,
      };
      console.log(params, 'paarams');
      try {
        const response = await UpdatePassword(user?.currentUser?.token, params);
        // console.log(response.data.success,response.data.message, 'response');
        if(response.data.success===true){

            dispatch(setUser({
                ...user.currentUser,
                token: response.data.data.token
            }));
            alert('UPDATED SUCCESSFULLY!');
            setError('')
            setfirst('')
            setlast('')
            setEmail('')
            // router.push('/');
        }
        if(response.data.success===false){
            setError(response.data.message)
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <AuthRoute> 
    <PageContainer title="Change Password" description="this is Contact">
      <Breadcrumb title="Change Password" subtitle="Update Your Password" />
      <AppCard>
        <Box className="updateprof">
          <Box>
            <Typography className="UpdateText">Current Password</Typography>
            <TextField
              id="standard-first"
              variant="standard"
              className="profField"
              value={first}
              onChange={handleFirstNameChange}
            />
          </Box>
          <Box>
            <Typography className="UpdateText">New Password</Typography>
            <TextField
              id="standard-last"
              variant="standard"
              className="profField"
              value={last}
              onChange={handleLastNameChange}
            />
          </Box>
          <Box>
            <Typography className="UpdateText">Confirm Password</Typography>
            <TextField
              id="standard-email"
              variant="standard"
              className="profField"
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          {error !== null ? <Typography className="errorStatement">{error}</Typography> : ''}
          <Box className="updateDiv">
            {' '}
            <Button
              disabled={first === '' || last === '' || email === ''}
              className="updateBut"
              onClick={handleSubmit}
            >
              Change Password
            </Button>
          </Box>{' '}
        </Box>
      </AppCard>
    </PageContainer>
    </AuthRoute>
  );
};

export default UpdatePassword1;
