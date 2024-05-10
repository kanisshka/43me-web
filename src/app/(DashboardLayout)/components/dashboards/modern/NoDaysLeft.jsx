'use client';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CancelIcon from '@mui/icons-material/Cancel';
import { StripePay } from '@/utils/apiCalls';
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
  Input,
} from '@mui/material';
import moment from 'moment';
import CustomRadio from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomRadio';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconChevronDown } from '@tabler/icons-react';
import { AddNewTask } from '@/utils/apiCalls';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
const NoDaysLeft = ({ onClose, open }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState('');
  const DataImg = new FormData();
  const [value, setValue] = useState('never');
  const [start, setStart] = useState(new Date());
  const [newlyUploadedImages, setNewlyUploadedImages] = useState([]);
  const [tags1, setTags1] = useState([]);
  // console.log(edit,'editing')
  const [newTag, setNewTag] = useState('');
  const [startMonth, setStartMonth] = useState(new Date());
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const [sliderValue, setSliderValue] = useState(1);
  const [monthly, setMonthly] = useState(false);
  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  const handleAddTask = async () => {

    try {
      const response = await StripePay();
      console.log(response)
    } catch (err) {
      onClose();
      console.log(err);
    }
  };

 
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h2" mb={2} fontWeight={700}>
          No Days Left 
        </Typography>
        <Typography variant='h5'>Your Subscription Plan has ended.
          <br/>
          To continue 43me click the Payment Button.</Typography>
      </DialogContent>
      <DialogActions>
        <Button
        
          // onClick={(e) => {
          //   e.preventDefault();
          //   dispatch(addNote(id, title, scolor));
          //   setOpen(false);
          //   setTitle('');
          // }}
          className='payment'
          color="primary1"
          onClick={handleAddTask}
        >
          Payment
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoDaysLeft;
