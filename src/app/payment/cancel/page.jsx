'use client'
import { Box, Typography } from '@mui/material'
import React,{useEffect} from 'react'
// import {useHistory} from 'react-router-dom'; // Assuming you're using react-router-dom for routing

const Cancel = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/'; // Redirect to '/redirected-page' after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <Box className='successCon'>
        <Box>
            <div className="success-checkmark">
            <div className="check-icon1 cross-icon">
    <span className="icon-circle"></span>
    <span className="icon-line line-left"></span>
    <span className="icon-line line-right"></span>
  </div>
</div></Box>
<Box>
  <Typography className='justifyMiddle'>Your Payment is Not Successful!</Typography>
  <Typography className='justifyMid'>You&apos;ll be automatically redirected back in 5 seconds!</Typography></Box>
    </Box>
  )
}

export default Cancel