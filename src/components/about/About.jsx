import React from 'react'
import ME from '../../assets/sunil.jpg'
import { FaAward } from 'react-icons/fa'
import { MdModelTraining } from 'react-icons/md'
import { VscProject } from 'react-icons/vsc'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>New in working field</small>
            </article>

            <article className='about__card'>
              <MdModelTraining className='about__icon'/>
              <h5>Training</h5>
              <small>Basic training</small>
            </article>

            <article className='about__card'>
              <VscProject className='about__icon'/>
              <h5>Project</h5>
              <small>Collage progect with collage team</small>
            </article>

          </div>
          <p>Software Engineering major currently graduated from Nepal College of information technology.
            Aiming to Leverage proven teamwork soft skill to successfully fill the software engineer role.
            Frequently praised as focused by my peers. I can be relied upon to help achieve goals.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
