import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import './SideBar.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SideBarOption from './SideBarOption';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import StarIcon from '@mui/icons-material/Star';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Duo, Person, Phone } from '@mui/icons-material';
function SideBar() {
  return (
    <div className='sidebar' >
        <Button startIcon={<AddOutlinedIcon fontSize = "large"  />}  className = "sidebar_tulis" >
            Tulis Pesan
        </Button>
        <SideBarOption
            title = "Masuk"
            Icon = {InboxOutlinedIcon}
            number = {1}
            selected = {true}
        />
        <SideBarOption
            title = "Berbintang"
            Icon = {StarIcon}
            number = {5}
        />
        <SideBarOption
            title = "Ditunda"
            Icon = {WatchLaterIcon}
            number = {1}
        />
        <SideBarOption
            title = "Terkirim"
            Icon = {SendIcon}
            number = {50}
        />
        <SideBarOption
            title = "Draf"
            Icon = {DraftsIcon}
            number = {0}
        />
        <SideBarOption
            title = "Selengkapnya"
            Icon = {ExpandMoreIcon}
        />
        <div className = "sidebar_footer">
            <div className='sidebar_icons'>
                <IconButton>
                    <Person/>
                </IconButton>
                <IconButton>
                    <Duo/>
                </IconButton>
                <IconButton>
                    <Phone/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default SideBar