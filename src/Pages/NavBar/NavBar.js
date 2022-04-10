import React from 'react'
import './Style.css'

export default function NavBar() {
  return (
    <div className='navBarContainer'>
        <ul className='navBarUl'>
            <a href='/#home'><h3  className='navBarLinks'>Home</h3></a>
            <a href='/#web'><h3 className='navBarLinks'>Web</h3></a>
            <a href='/#about'><h3 className='navBarLinks'>About</h3></a>
            <a href='/resume'><h3 className='navBarLinks'>Resume</h3></a>
        </ul>
    </div>
  )
}
