'use client';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';

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
import { AddNewTask } from '@/utils/apiCalls';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
const AddTask = ({ onClose, open }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('never');
  const [start, setStart] = useState(new Date());
  const[tags1,setTags1] = useState([])
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
  function formatDate(dateString) {
    const formattedDate = moment(dateString).format('YYYY-MM-DD');
    return formattedDate;
  }
  function getDayOfMonth(dateString) {
    const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero and slice last two characters
  return year + '-' + month;
  }

  const handleStartChange = (newValue) => {
    setStart(newValue);
  };
  const handleStartChangeMonth = (newValue) => {
    setStartMonth(newValue);
  };
  console.log(start, startMonth, value, 'hey')
  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      if (!tags1.includes(newTag.trim())) {
        setTags1([...tags1, newTag.trim()]);
      }
      setNewTag('');
    }
  };
  const handleDelete = (tagToDelete) =>{
    const uniqueTagsString = tags1.filter(tag => tag !== tagToDelete)
    // Update the state with the unique tags string
    // setTags(uniqueTagsString);
    console.log(uniqueTagsString,'tasks')
    // const tagsArray1 = uniqueTagsString.split(',');
    setTags1(uniqueTagsString)
  }
  const handleAddTask = async () => {
    let data = {
      description: title,
      is_month: monthly === true ? "true" : "false",
      date: monthly === true ? "" : formatDate(start),
      month: monthly === true ? getDayOfMonth(startMonth) : getDayOfMonth(start),
      tags:tags1.length>0 ? tags1.join(',') : " ",
      // month:'2024-06',
      scheduled: value,
      repeatCount: value === 'never' ? 0 : sliderValue,
    }
    console.log(data)
    try {
      const response = await AddNewTask(user?.currentUser?.token, data)
      console.log(response, 'response')
      if (response?.status === 200) {
        onClose();
        alert('Added Successfully')
        // router.push('/apps/tasks')
        location.reload()
      }
      onClose();
    } catch (err) {
      onClose();
      console.log(err);
    }
  }
  const getSliderMinMax = () => {
    switch (value) {
      case 'daily':
        return { min: 1, max: 365 };
      case 'weekly':
        return { min: 1, max: 52 };
      case 'biweekly':
        return { min: 1, max: 26 };
      case 'monthly':
        return { min: 1, max: 12 };
      default:
        return { min: 1, max: 3 }; // Default values for other cases
    }
  };
  const handleChange = (event) => {
    setNewTag(event.target.value);
  };
  const { min, max } = getSliderMinMax();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h5" mb={2} fontWeight={700}>
          Add New Task
        </Typography>
        {/* <DialogContentText>
            To add new notes please enter your description and choose note colors. and press the
            submit button to add new note.
          </DialogContentText> */}
        <TextField
          multiline
          rows={5}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          id="description"
          label="Add Task Description"
          type="text"
          fullWidth
          size="small"
          variant="outlined"
        />
         <div className='end'>{tags1.length > 0 && tags1?.map((item1, index) => (
            <Chip
              key={index} // Remember to include a unique key when mapping over elements in React
            //   color="primary"
              size="medium"
              label={item1 ? `${item1}` : ''} // Check if item.tag is defined before accessing it
              className="chipCssTag hoverCursor"
              onClick={()=>handleDelete(item1)}
            />
          ))}</div>
        <div className='displaying1'><div className='Addtags'><TextField id="tags" label="Add Tags" variant="standard" value={newTag}
          onChange={handleChange}className='addtaging'/></div>
          <div><Button className='buttonIcon' onClick={handleAddTag}><AddIcon /></Button></div></div>
        <Accordion>
          <AccordionSummary
            expandIcon={<IconChevronDown />}
            aria-controls="panel1a-content"
            id="change_task_date"
          >
            <Typography variant="h6">
              Change Task Date?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              value="start"
              control={<Switch color="primary" onChange={(e) => setMonthly(e.target.checked)} />}
              label="Monthly"
              labelPlacement="start"
            />
            {monthly ? (<LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start Month"
                views={['year', 'month']}
                inputFormat="MM/yyyy"
                value={startMonth}
                onChange={handleStartChangeMonth}
                renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2, mt: 2 }} />}
              />
            </LocalizationProvider>) : (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  inputFormat="MM/dd/yyyy"
                  value={start}
                  onChange={handleStartChange}
                  renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2, mt: 2 }} />}
                />

              </LocalizationProvider>
            )}
          </AccordionDetails>
        </Accordion>

        {monthly!==true &&  <Accordion>
          <AccordionSummary
            expandIcon={<IconChevronDown />}
            aria-controls="panel1a-content"
            id="repeat_task_date"
          >
            <Typography variant="h6" >
              Repeat Task?
            </Typography></AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset" className="displaying">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange2}
                className="displaying"
              >
                <FormControlLabel value="never" control={<CustomRadio />} label="Never" />
                <FormControlLabel value="daily" control={<CustomRadio />} label="Daily" />
                <FormControlLabel value="weekly" control={<CustomRadio />} label="Weekly" />
                <FormControlLabel value="biweekly" control={<CustomRadio />} label="Biweekly" />
                <FormControlLabel value="monthly" control={<CustomRadio />} label="Monthly" />
              </RadioGroup>
            </FormControl>
            {value !== 'never' && (
              <Box>
                <Typography my={2}>Repeat this task {sliderValue} {sliderValue > 1 ? 'times' : 'time'}</Typography>
                <Slider
                  aria-label="RepeatCount"
                  valueLabelDisplay="auto"
                  step={1}
                  min={min}
                  max={max}
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
              </Box>
            )}
          </AccordionDetails>
        </Accordion>}
        {/* {repeat.map((color) => (
            <Fab
              color={color.disp}
              sx={{
                marginRight: '3px',
                transition: '0.1s ease-in',
                scale: scolor === color.disp ? '0.9' : '0.7',
              }}
              size="small"
              key={color.disp}
              onClick={() => setColor(color.disp)}
            >
              {scolor === color.disp ? <IconCheck /> : ''}
            </Fab>
          ))} */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary1">
          Cancel
        </Button>
        <Button
          disabled={title === ''}
          // onClick={(e) => {
          //   e.preventDefault();
          //   dispatch(addNote(id, title, scolor));
          //   setOpen(false);
          //   setTitle('');
          // }}
          color="primary1"
          onClick={handleAddTask}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
