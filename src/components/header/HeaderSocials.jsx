import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
          <a href="https://github.com/Sunilstha23" target="_blank"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/sunilstha23/" target="_blank"><BsLinkedin /></a>
          <a href="https://www.facebook.com/Sunilshrestha23/" target="_blank"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
