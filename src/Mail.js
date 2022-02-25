import { IconButton } from '@material-ui/core'
import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import LabelIcon from '@mui/icons-material/Label';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useHistory } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';

function Mail() {
  const history = useHistory();
  return (
    <div className='mail' >
        <div className='mail__tools'>
          <div className='mail__toolsLeft'>
            <IconButton onClick={() => history.push("/")} >
              <ArrowBackIcon/>
            </IconButton>
            <IconButton>
              <MoveToInboxIcon/>
            </IconButton>
            <IconButton>
              <ErrorIcon/>
            </IconButton>
            <IconButton>
              <DeleteIcon/>
            </IconButton>
            <IconButton>
              <EmailIcon/>
            </IconButton>
            <IconButton>
              <WatchLaterIcon/>
            </IconButton>
            <IconButton>
              <AddTaskIcon/>
            </IconButton>
            <IconButton>
              <DriveFileMoveIcon/>
            </IconButton>
            <IconButton>
              <LabelIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
          <div className='mail__toolsRight'>
            <IconButton>
              <ChevronLeftIcon/>
            </IconButton>
            <IconButton>
              <ChevronRightIcon/>
            </IconButton>
            <IconButton>
              <EditIcon/>
            </IconButton>
          </div>
        </div>
        <div className='mail__content'>
          <div className='mail__contentHeader'>
            <h2>Your invite to Facebook</h2>
            <p>Facebook</p>
            <p className='mail__time' >time</p>
          </div>
          <div className='mail__contentBody'>
            <p>Hi, Bagas Congrates on your new job!</p>
          </div>
        </div>
    </div>
  )
}

export default Mail