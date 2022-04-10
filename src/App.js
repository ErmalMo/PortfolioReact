import React, {useState} from 'react'
import Home from './Pages/Home/Home'
import NavBar from './Pages/NavBar/NavBar'
import About from './Pages/About/About'
import './App.css'
import Web from './Pages/Web/Web'
import Footer from './Pages/Footer/Footer'
export default function App() {

  const [theme, setTheme] = useState('dark')
  function changeThemeMode(e){
    console.log(e.target.value)
    setTheme(e.target.value)
  }
  return (
    <div className={theme} >
      
      <NavBar />
      <select onChange={changeThemeMode} className='appThemeOptions'>
        <option value="dark">Dark Mode</option>
        <option value="light">Light Mode</option>
      </select>
      <Home />
      <About />
      <Web />
      <Footer />
    </div>
  )
}