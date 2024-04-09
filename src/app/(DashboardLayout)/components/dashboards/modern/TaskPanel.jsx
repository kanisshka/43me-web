import { Box, Icon, Typography } from '@mui/material'
import React,{useState} from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'; import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { EditTask } from '@/utils/apiCalls';
import {useSelector} from 'react-redux'
const TaskPanel = ({ item , editing ,onTaskEdit }) => {
const user = useSelector((state) => state.user);
const [desc, setDesc] = useState(item?.description || '');
  const [edit, setEdit] = useState(false)
  console.log(edit,'editing')
  const handleEdit = async () => {
    const data = { 
      description:  desc,
      date: '2024-04-09'
    }
    try{
  // console.log(edit,'editstate')
      

      const response = await EditTask(user?.currentUser?.token,item._id,data);
      // console.log(response,'response')
      if(response.status===200){
        setEdit(false);
  // console.log(edit,'editstate')
  onTaskEdit({ ...item, description: desc });
      }
    }
    catch(err){
      console.log(err);
    }
  }
  // console.log(edit,'editstate')
  const handleDescriptionChange = (event) => {
    setDesc(event.target.value); // Update the edited description
    console.log(desc,'description')
  };
  return (
    <div className='viewTaskTab' key={item._id}>
      <Box className='flexedDiv'>
        <div className='flexed' onClick={() => setEdit(true)}><Icon className='flexedIcon hoverCursor'><DriveFileRenameOutlineIcon /></Icon> <Typography>Edit</Typography></div>
        <div className='flexed'><Icon className='flexedIcon hoverCursor'><DoneAllIcon /></Icon><Typography>Mark as Done</Typography></div>
        <div className='flexed'><Icon className='flexedIcon hoverCursor'><ArrowCircleRightIcon /></Icon><Typography>Move</Typography></div>
      </Box>
      {edit ? (
        <Box className="textViewEdit">
          {/* <textarea value={desc} onChange={handleDescriptionChange}>{desc}</textarea> */}
          <textarea
            // type="textarea"
            value={desc}
            onChange={handleDescriptionChange}
            className='textInputEdit'
          />
          <div className='SaveCloseDiv'>
          <button onClick={() => setEdit(false)} className='SaveEditCancel hoverCursor'>Cancel</button>
          <button onClick={handleEdit} className='SaveEdit hoverCursor'>Save</button>
          </div>
        </Box>
      ) : (
        <Box className="textView">
          <Typography>{item?.description}</Typography>
        </Box>
      )}
      {/* <Box className={edit ? "textViewEdit" : "textView"}  contentEditable={edit} onChange={handleDescriptionChange}><Typography>{desc}</Typography></Box> */}
    </div>
  )
}

export default TaskPanel