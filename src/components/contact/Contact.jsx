import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_okiqvw8', 'template_6jbq4zq', form.current, 'VNBBlN3qJ3l3ZAq8v')
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>explore.sunilshrestha@gmail.com</h5>
            <a href="mailto:explore.sunilshrestha@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sunil Shrestha</h5>
            <a href="https://m.me/Sunilshrestha23/" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+9779825338425</h5>
            <a href="https://wa.me/<+9779825338425>" target='_blank' rel="noreferrer">Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Messagae' required></textarea>
          <button type="submit" value="Send" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
