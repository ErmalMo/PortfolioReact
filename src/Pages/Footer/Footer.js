import React from 'react'
import pic from  '../../ProjectPics/Socials/github.png'
import pic2 from '../../ProjectPics/Socials/instagram.png'
import './Style.css'
export default function Footer() {
  return (
    <div className='footerContainer'>
      
      <div class="footer">
        <div class="content">
          <div className='footerGithubDiv' > 
          <a  href='https://github.com/ErmalMo' ><img src={pic}  alt="github"/></a>
          <a href='https://www.instagram.com/ermalmo1/' ><img src={pic2}  alt="github"/></a>
          <br/>
          </div>
          <div className='footerEmail'>
            <h3 >ermalmorina2000@gmail.com</h3>  
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
