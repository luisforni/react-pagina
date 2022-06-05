import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX Researcher</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX Tester</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architect</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Strategist</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Interaction Designer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI Front End Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI Motion</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front End Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back End Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Stack Developer</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Copywriting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SEO</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graph</p>
            </li>
          </ul>
        </article>
        {/* END CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services