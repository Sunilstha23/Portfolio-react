import React, { useState }  from 'react'
import './nav.css'
import { AiFillHome } from 'react-icons/ai'
import { BiUser, BiBook, BiMessage} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessage /></a>

   </nav>
  )
}

export default Nav