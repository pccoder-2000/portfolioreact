/*jshint esversion: 6*/
import React from 'react';
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import tie from '../assets/icons/tie.svg'
import pin from '../assets/icons/pin.svg'
import mightycoder from '../assets/mightycoder.jpg'
import resume from '../assets/resume.pdf'
import email from '../assets/icons/email.svg'


const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:pcchaturvedi334@gmail.com")
}
  return(
    <div className="sidebar">
             <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
             <div className="sidebar__name">Priya<span> Chaturvedi</span> </div>
             <div className="sidebar__item sidebar__title">Web Developer</div>
             <a href={resume} download="">
                 <div className="sidebar__item sidebar__resume">
                     <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                 </div>
             </a>
             <figure className="sidebar__social-icons my-2">
                 <a href=""><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                 <a href=""><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
             </figure>
             <figure className="sidebar__social-icons my-2">
                     <a href=""><img src={github} alt="github" className="sidebar__icon mr-3" /></a>
                     <a href=""><img src={pin} alt="likedin" className="sidebar__icon" /></a>


                </figure>

             <div className="sidebar__item sidebar__email onClick={handleEmailMe}">email me</div>
         </div>
  )
}
export default Sidebar;
