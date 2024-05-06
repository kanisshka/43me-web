'use client';
import React, { useState } from 'react';
import {
  FormControlLabel,
  RadioGroup,
  FormControl,
  Switch,
  DialogActions,
  Button,
} from '@mui/material';
import Slider from '@mui/material/Slider';
import {
  Grid,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Divider,
} from '@mui/material';
import moment from 'moment';
import CustomRadio from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomRadio';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconChevronDown } from '@tabler/icons-react';
import { ResendCode,ActiveAccount } from '@/utils/apiCalls';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
const VerifyOtp = ({ onClose, open , email }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('never');
  const [error,setError] = useState('')
  const [start, setStart] = useState(new Date());
  const [startMonth, setStartMonth] = useState(new Date());
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const [sliderValue, setSliderValue] = useState(1);
  const [monthly, setMonthly] = useState(false);
  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const resendCode = async () => {
    const data = {
      email: email,
    };
    try {
      const respons = await ResendCode(data);
      console.log(respons, 'respons');
    } catch (err) {
      console.log(err);
    }
  };
  const handleVerify = async () => {
    const dat = {
      email:email,
      activation_code:title
    };
    try {
      const res = await ActiveAccount(dat);
      if (res.data.errors) {
        setError(res.data.message);
      }
      if (res.data.success === true) {
        router.push('/')
        onClose()
      } else {
        console.log(res);
        setError(res.data.message);
      }
      console.log(res,'res');
    } catch(err){
      console.log(err)
    }
  }
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h5" mb={2} fontWeight={700}>
          Enter Code
        </Typography>
        {/* <DialogContentText>
            To add new notes please enter your description and choose note colors. and press the
            submit button to add new note.
          </DialogContentText> */}
        <Typography variant="h6">
          Please enter the code sent to {email} to verify your account.
        </Typography>
        <TextField
          multiline
          rows={1}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          id="code"
          label="Verification Code"
          type="text"
          fullWidth
          size="small"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
      {error !== null ? <Typography className="errorStatement">{error}</Typography> : ''}
        <Button onClick={onClose} color="primary1">
          Skip
        </Button>
        <Button
          disabled={title === ''}
          // onClick={(e) => {
          //   e.preventDefault();
          //   dispatch(addNote(id, title, scolor));
          //   setOpen(false);
          //   setTitle('');
          // }}
          className='verify'
          color="primary1"
          variant='contained'
          onClick={handleVerify}
        >
          Verify
        </Button>
      </DialogActions>
        <Box className="verifyBox">
        <Typography onClick={resendCode} className='didntCode'>Didn't get code? Send Again</Typography>
         </Box>   
    </Dialog>
  );
};

export default VerifyOtp;
