import { Box, Icon, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { EditTask, TaskList, MoveTask, MarkAsDone, RemoveTask } from '@/utils/apiCalls';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CheckBox from '@/app/(DashboardLayout)/layout/vertical/sidebar/CheckBox';
import Sure from './Sure';
const TaskPanel = ({ item, editing, onTaskEdit, onTaskMove }) => {
  const user = useSelector((state) => state.user);
  const [desc, setDesc] = useState(item?.description || '');
  const [edit, setEdit] = useState(false);
  const [isLoading,setIsLoading]= useState(false)
  const [move, setMove] = useState(false);
  const [more, setMore] = useState(false);
  const [list, setList] = useState();
  const [opens, setOpen] = useState(false)
  const [delet, setDelet] = useState(false)
  // console.log(edit,'editing')
  const router = useRouter()
  function getCurrentDate() {
    return moment().format('YYYY-MM-DD');
  }
  const handleCloseSure = () => {
    setDelet(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickMore = (event) => {
    setAnchorEl(event.currentTarget);
    setMore(true);
  };
  const handleClick = () => {
    setMove(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = async () => {
    const data = {
      description: desc,
      // date: item.date,
    };
    if (item.is_month) {
      data.date = item.month;
    } else{
      data.date = item.date;
    }
  setIsLoading(true)
    try {
      const response = await EditTask(user?.currentUser?.token, item._id, data);
      if (response.status === 200) {
        setEdit(false);
        onTaskEdit({ ...item, description: desc });
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = async () => {
    try {
      const response = await RemoveTask(user?.currentUser?.token, item);
      if (response.status === 200) {
        console.log(response, 'response')
        // setEdit(false);
        // onTaskEdit({ ...item, description: desc });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDescriptionChange = (event) => {
    setDesc(event.target.value); // Update the edited description
    console.log(desc, 'description');
  };
  const handleEditTrue = () => {
    setEdit(true);
    setMove(false);
  };
  const handleMoveTrue = () => {
    setEdit(false);
    setMove(true);
  };
  const handleCloseAll = () => {
    setEdit(false);
    setMove(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        is_month: 'false',
        date: getCurrentDate(),
      };
      try {
        const response = await TaskList(user?.currentUser?.token, data);
        setList(response.data);
        console.log(response.data, 'responseup');
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user !== null]);
  const [selectedItemId, setSelectedItemId] = useState({ id: null, is_month: null });

  const handleCheckBoxChange = (itemId) => {
    const isMonth = list?.data[1]?.data.some(item => item.id === itemId);
    setSelectedItemId({ id: itemId, is_month: isMonth });
  };
  console.log(selectedItemId, 'selected')
  const isSaveDisabled = selectedItemId.id === null;

  const handleMove = async () => {
    let Data;
    if (selectedItemId.is_month === true) {
      Data = {
        is_month: 'true',
        month: selectedItemId.id,
      };
    }
    else {
      Data = {
        is_month: 'false',
        date: selectedItemId.id,
      };
    }

    try {
      const response = await MoveTask(user?.currentUser?.token, item._id, Data);
      console.log(response, 'response')
      if (response.status === 200) {
        setMove(false);
        alert('Moved Successfully!')
        setEdit(false);
        // // console.log(edit,'editstate')
        onTaskMove(item)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleComplete = async () => {
    let Data = {
      is_completed: 'true',
      date: item.date,
      is_month: 'false'
    }

    try {
      const response = await MarkAsDone(user?.currentUser?.token, item._id, Data);
      console.log(response, 'response')
      if (response.status === 200) {
        // setMove(false);
        alert('Marked as Done Successfully!')
        router.push('/apps/tasks')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="viewTaskTab" key={item._id}>
      <Box className="flexedDiv">
        <div className="flexed hoverCursor" onClick={handleEditTrue}>
          <Icon className="flexedIcon">
            <DriveFileRenameOutlineIcon />
          </Icon>{' '}
          <Typography>Edit</Typography>
        </div>
        <div className="flexed hoverCursor" onClick={handleComplete}>
          <Icon className="flexedIcon">
            <DoneAllIcon />
          </Icon>
          <Typography>Mark as Done</Typography>
        </div>
        <div className="flexed hoverCursor"
          onClick={handleClick}
        >
          <Icon className="flexedIcon">
            <ArrowCircleRightIcon />
          </Icon>
          <Typography>Move</Typography>
        </div>
        <div className="flexed hoverCursor" onClick={handleClickMore} id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}>
          <Icon className="flexedIcon">
            <MoreVertOutlinedIcon />
          </Icon>
          {/* <Typography>Move</Typography> */}
        </div>
      </Box>

      {edit && (
        <Box className="textViewEdit">
          {/* <textarea value={desc} onChange={handleDescriptionChange}>{desc}</textarea> */}
          <textarea
            // type="textarea"
            value={desc}
            onChange={handleDescriptionChange}
            className="textInputEdit"
          />
          <div className="SaveCloseDiv">
            <button onClick={handleCloseAll} className="SaveEditCancel hoverCursor">
              Cancel
            </button>
            <button disabled={isLoading} onClick={handleEdit} className={"SaveEdit hoverCursor " + (isLoading ? 'disabled' : "")}
>
              {isLoading ? 'Saving...' : 'Save' }
            </button>
          </div>
        </Box>
      )}
      {move && (
        <Box className="textViewEdit">
          <Typography variant='h6' className='flexed'>Move Task</Typography>
          <div className="checkBoxArea">
            <Box>
              {list?.data[0]?.data.map((item) => (
                <CheckBox item={item} key={item.id} checked={selectedItemId.id === item.id}
                  handleChange={() => handleCheckBoxChange(item.id)} />
              ))}
              {list?.data[1]?.data.map((item) => (
                <CheckBox item={item} key={item.id} checked={selectedItemId.id === item.id}
                  handleChange={() => handleCheckBoxChange(item.id)} />
              ))}
            </Box>
          </div>
          <div className="SaveCloseDiv">
            <button onClick={handleCloseAll} className="SaveEditCancel hoverCursor">
              Cancel
            </button>
            <button onClick={handleMove} className={`SaveEdit hoverCursor ${isSaveDisabled ? 'disabled' : ''}`} disabled={isSaveDisabled}>
              Save
            </button>
          </div>
        </Box>
      )}
      {more && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Share</MenuItem>
          <MenuItem onClick={()=>setDelet(true)}>Delete</MenuItem>
          {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>

      )}
      {delet && (<Sure onClose={handleCloseSure} open={true} item={item} onTaskMove={onTaskMove}/>)}
      {/* if non is true */}
      {!edit && !move && (
        <Box className="textView">
          <Typography>{item?.description}</Typography>
        </Box>
      )}
      {/* <Box className={edit ? "textViewEdit" : "textView"}  contentEditable={edit} onChange={handleDescriptionChange}><Typography>{desc}</Typography></Box> */}
    </div>
  );
};

export default TaskPanel;
