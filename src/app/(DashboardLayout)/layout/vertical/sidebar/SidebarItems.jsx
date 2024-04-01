import Menuitems from './MenuItems';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FormControlLabel, Grid, RadioGroup, FormControl, Switch } from '@mui/material';

import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
import NavGroup from './NavGroup/NavGroup';
import { toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CustomRadio from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomRadio';

const SidebarItems = () => {
  const  pathname  = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
const repeat = ['never','daily','weekly','biweekly','monthly' ]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState('Never');

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );

            // {/********If Sub No Menu**********/}
          }else if(item.title === 'Add New Task') {
            return (
              <>
              <Button variant="contained" disableElevation color="primary1" onClick={handleClickOpen} className='margin10'> 
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
          <Typography variant="h6" my={2}>
           Change Task Date?
          </Typography>
          <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                label="Monthly"
                labelPlacement="start"
            />
          <Typography variant="h6" my={2}>
          Repeat Task?
          </Typography>
          <FormControl component="fieldset" className='displaying'>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange2} className='displaying'>
                <FormControlLabel
                  value="Never"
                  control={<CustomRadio />}
                  label="Never"
                
                />
                <FormControlLabel
                  value="Daily"
                  control={<CustomRadio />}
                  label="Daily"
                />
                <FormControlLabel
                  value="Weekly"
                  control={<CustomRadio />}
                  label="Weekly"
                />
                <FormControlLabel
                  value="Biweekly"
                  control={<CustomRadio />}
                  label="Biweekly"
                />
                <FormControlLabel
                  value="Monthly"
                  control={<CustomRadio />}
                  label="Monthly"
                />
              </RadioGroup>
            </FormControl>
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
          <Button  disabled={title === ''} onClick={handleClose} variant="contained">Save & Add New</Button>
          <Button
            disabled={title === ''}
            // onClick={(e) => {
            //   e.preventDefault();
            //   dispatch(addNote(id, title, scolor));
            //   setOpen(false);
            //   setTitle('');
            // }}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </>
            );
          } 
          else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu} onClick={() => dispatch(toggleMobileSidebar())} />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
