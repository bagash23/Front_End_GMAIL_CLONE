import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Header() {
  return (
    <div className='header' >
        <div className='header-left'>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='logo'/>
        </div>
        <div className='header-middle'>
            <SearchIcon />
            <input type='text' placeholder='Search'/>
            <ArrowDropDownIcon  className = "header_input" />
        </div>
        <div className='header-right'>
            <IconButton>
                <HelpOutlineOutlinedIcon/>
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon/>
            </IconButton>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <Avatar />
        </div>
    </div>
  )
}

export default Header