import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/medhouse.jpg'
import IMG2 from '../../assets/frontend.jpg'
import IMG3 from '../../assets/portfolio.jpg'
import Modal from '../modal/Modal'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-MedHouse, a Medical E-commerce Website Complaint with WCAG & ADA',
    github: "https://github.com/Sunilstha23/MedHouse",
    description: "It enable user to book appointments for doctors and labs online. With WCAG Aand ADA guideline and platform for buying and selling medicine.Testing was done by axe DevTools for each page to verify its is on track of WCAG Guideline. We use the jquery and js for ADA to make accessible for differentable people"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Font-end-Development-Assignment',
    github: "https://github.com/Sunilstha23/Font-end-Development-Assignment-",
    description:'Assignment of Fontend development HTML CSS BOOTSTRAP AND JAVASCRIPT'

  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio using React',
    github: "https://github.com/Sunilstha23/Portfolio-react",
    description:'portfolio website made by ussing reactjs'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, description }) => {
            return (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                        <img src={image} alt= {title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a href={github} target='_blank' rel="noreferrer" className='btn'>GitHub</a> 
                        <Modal title={title} description={description}/>
                      </div>
                    </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
