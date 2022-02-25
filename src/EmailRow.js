import { Checkbox, IconButton, Popover } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useHistory } from 'react-router-dom';

function EmailRow({title, subject, description, time}) {

    const history = useHistory();

  return (
    <div className='emailrow' onClick={() => history.push("/mail")} >
        <div className='emailrow__options'>
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
        </div>
        <h3 className='emailrow__title' >{title}</h3>    
        <div className='emailrow__message'>
            <h4>
                {subject}{' - '}
                <span className='emailrow__description'>{description}</span>
            </h4>
        </div>
        <p className='emailrow__time'>
            {time}
        </p>

    </div>
  )
}

export default EmailRow