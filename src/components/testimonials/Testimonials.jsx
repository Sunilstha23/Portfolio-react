import React from 'react'
import AVTR1 from '../../assets/sunil.jpg'
import './testimonials.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [{
  avatar: AVTR1,
  name: 'Shrija Shreejan Shrestha',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae asperiores nam repellat aperiam laudantium impedit earum fugit at maxime iure provident, adipisci tempora ipsa esse, sapiente deleniti nostrum eos.',
},
  {
  avatar: AVTR1,
  name: 'Astha Shrestha',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae asperiores nam repellat aperiam laudantium impedit earum fugit at maxime iure provident, adipisci tempora ipsa esse, sapiente deleniti nostrum eos.',
  },
  {
  avatar: AVTR1,
  name: 'GhyanSham Joshi',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, repudiandae asperiores nam repellat aperiam laudantium impedit earum fugit at maxime iure provident, adipisci tempora ipsa esse, sapiente deleniti nostrum eos.',
}
]
const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from Team</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testimonials__container"
          // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className='testimonial'>
                <div className="team_avatar">
                  <img src={AVTR1} alt={name} />
                </div>
                <div>
                  <h5 className="friend__name">{name}</h5>
                  <small className="friend__review">
                    {review}
                  </small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
   </section>
  )
}

export default Testimonials
