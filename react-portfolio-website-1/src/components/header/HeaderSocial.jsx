import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/luis-forni-97aa49223/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/luisforni/" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/luisforni/" target="_blank"><FiDribbble/></a>
        <a href="https://instagram.com/luisforni/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocial