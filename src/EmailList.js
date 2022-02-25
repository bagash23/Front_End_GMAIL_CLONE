import React from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import Section from './Section';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';

function EmailList() {
  return (
    <div className='emaillist' >
        <div className='emailList__setings'>
            <div className='emailList__setings__left'>
                <Checkbox />
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='emailList__setings__right'>
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
        <div className='emailList__section'>
            <Section Icon = {InboxOutlinedIcon} title = "Utama" color = "red" selected />
            <Section Icon = {PeopleAltIcon} title = "Sosial" color = "#1a73e8"  />
            <Section Icon = {LocalOfferIcon} title = "Promosi" color = "green" />
        </div>
        <div className='emailList__list'>
            <EmailRow
                title="Facebook"
                subject="Your invite to Facebook"
                description="Hi, Bagas Congrates on your new job!"
                time="1 hour ago"
            />
        </div>
    </div>
  )
}

export default EmailList