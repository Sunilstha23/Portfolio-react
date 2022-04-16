import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
          <a href="https://github.com/Sunilstha23" target="_blank" rel="noreferrer"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/sunilstha23/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a href="https://www.facebook.com/Sunilshrestha23/" target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials
