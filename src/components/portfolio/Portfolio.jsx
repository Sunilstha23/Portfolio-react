import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/medhouse.jpg'
import IMG2 from '../../assets/frontend.jpg'
import IMG3 from '../../assets/portfolio.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-MedHouse, a Medical E-commerce Website Complaint with WCAG & ADA',
    github: "https://github.com/Sunilstha23/MedHouse",
    detail: "#"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Font-end-Development-Assignment',
    github: "https://github.com/Sunilstha23/Font-end-Development-Assignment-",
    detail: "#"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio using React',
    github: "https://github.com/Sunilstha23/Portfolio-react",
    detail: "#"
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, detail }) => {
            return (
                    <article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                        <img src={image} alt= {title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a href={github} target='_blank' className='btn'>GitHub</a> 
                        <a href={detail} className="btn btn-primary" target='_blank'>Detail</a>
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
