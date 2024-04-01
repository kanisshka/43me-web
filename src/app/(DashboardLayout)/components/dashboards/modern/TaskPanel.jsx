import { Box, Icon, Typography } from '@mui/material'
import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const TaskPanel = () => {
  return (
    <div className='viewTaskTab'>
        <Box className='flexedDiv'>
            <div className='flexed'><Icon className='flexedIcon'><DriveFileRenameOutlineIcon/></Icon> <Typography>Edit</Typography></div>
            <div className='flexed'><Icon className='flexedIcon'><DoneAllIcon/></Icon><Typography>Mark as Done</Typography></div>
            <div className='flexed'><Icon className='flexedIcon'><ArrowCircleRightIcon/></Icon><Typography>Move</Typography></div>
        </Box>
        <Box className="textView"><Typography>Testing1</Typography></Box>
    </div>
  )
}

export default TaskPanel