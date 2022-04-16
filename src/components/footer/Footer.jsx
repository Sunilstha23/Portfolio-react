/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">SUNIL</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Sunilshrestha23/" target='_blank' rel='noreferrer'><AiFillFacebook /></a>
        <a href="https://www.instagram.com/____sunil____/" target='_blank' rel='noreferrer'><BsInstagram /></a>
        <a href="https://twitter.com/Xunil12" target='_blank' rel='noreferrer'><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sunil Shrestha protfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
