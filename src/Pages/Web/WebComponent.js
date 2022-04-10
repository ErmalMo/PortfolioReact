import React from 'react'
import './Style.css'
export default function WebComponent(props) {
    const {nameOfProject, link, summaryOfProject} = props
  return (
    <div className='webComponentContainer'>
        <h1 className='webTitleProject'><a href={link} className='webLinkProject'>github:{nameOfProject}</a></h1>
        <p className='webComponentSummary'>{summaryOfProject}</p>
    </div>
  )
}
