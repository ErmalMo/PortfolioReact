import React, {useState} from 'react'
import './Style.css'
import pic from '../../ProjectPics/pixelMe.jpg'
import mePic from '../../ProjectPics/me.PNG'
export default function Home() {
  const [pictureSide, setPictureSide] = useState(false)

  function turnSides(){
    setPictureSide(!pictureSide)
  }
  return (
    <div id="home" className='homeContainer'>
        <h1 className='homeName'>Ermal Morina</h1>
        <h2 className='homeJou'>THE ODYSSEY OF A FULL-STACK WEB DEVELOPER</h2>
        <div onClick={turnSides} className='homeAvatarContainer' >
          <span className='homeHoverMe'>Click me (: </span>
        {
          pictureSide ? 
          <img src={mePic} className='homeAvatar' alt='me'/>
          :
          <img src={pic} className='homeAvatar'  alt="avatar" />
        }
        <p style={{color:"#c5c6c7", fontSize:"10px", width:"56%", marginLeft:"22%"}}>click avatar to reveal a picture of me!</p>
        </div>
        <h4 className='homeSpeech'>I am a motivated person, right now i am at the finish line to graduate 
          i love web developing, i learn, have fun and get excited while building web applications.
          For the moment i dont have a lot of experience in building applications but
          i love building them and i practice a lot. 
        </h4>
        <br />
     </div>
  )
}
