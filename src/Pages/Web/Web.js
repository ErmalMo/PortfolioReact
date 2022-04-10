import React from 'react'
import eDitariPic from '../../ProjectPics/EShkollaProject/editari.png'
import bugTrackerPic from '../../ProjectPics/BugTracker/images.png'
import eShopPic from '../../ProjectPics/e-Shop/images.png'
import newsApiPic from '../../ProjectPics/NewsApi/images.jpg'
import weatherApiPic from '../../ProjectPics/WeatherApi/WeatherApi.png'
import WebComponent from './WebComponent'
export default function Web() {
  return (
    <div id="web" className="WebContainer">
        <h1 className='webHeader'>WEB</h1>
        <div className='webBottom'></div>
        <div className='webProject'>
            <img src={eDitariPic} className='WebProjectPic' alt="projectPic" />
            <WebComponent 
            nameOfProject={" e-Ditari"}
             link={"https://github.com/ErmalMo/e-Ditari.git"}
             summaryOfProject={"This project is for administrating pre school system"} />
        </div>
        <div className='webProject'>
            <img src={bugTrackerPic} className='WebProjectPic' alt="projectPic" />
            <WebComponent 
            nameOfProject={" BugTracker"}
             link={"https://github.com/ErmalMo/BugTracker.git"}
             summaryOfProject={"This project was about demonstrating backend concept as login authentication, authorization and other full stack concepts"} />
        </div>
        <div className='webProject'>
            <img src={eShopPic} className='WebProjectPic' alt="projectPic" />
            <WebComponent 
            nameOfProject={" e-Shopping"}
             link={"https://github.com/ErmalMo/e-Shopping.git"}
             summaryOfProject={"e-shopping project is an online project which allows us to buy online"} />
        </div>
        <div className='webProject'>
        
            <img src={newsApiPic} className='WebProjectPic' alt="projectPic" />
            <WebComponent 
            nameOfProject={" newsProject"}
             link={"https://github.com/ErmalMo/NewsProjectAPI.git"}
             summaryOfProject={"This is a news project, works with real data time, its super efficient, i worked on third party api"} />
        </div>
        <div className='webProject'>
            <img src={weatherApiPic} className='WebProjectPic' alt="projectPic" />
            <WebComponent 
            nameOfProject={" weatherApi Project"}
             link={"https://github.com/ErmalMo/weather-api-project.git"}
             summaryOfProject={"This is a weather project, works with real data time, its super efficient, i worked on third party api"} />
       
        </div>
    </div>
  )
}
