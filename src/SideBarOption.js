import React from 'react'
import "./SideBarOption.css"

function SideBarOption({title,Icon,number, selected}) {
  return (
    <div className={`sidebarOption ${selected && `sidebarOption--active`} `} >
        <Icon/>
        <h3>{title}</h3>
        <span>{number}</span>
    </div>
  )
}

export default SideBarOption