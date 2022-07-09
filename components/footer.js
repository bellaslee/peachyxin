import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className='footer'>
      <a href="http://instagram.com/peachyxin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      <p>peachyxin(at)gmail(dot)com</p>
      <p>&copy; 2022 Bella Lee</p>
    </section>
  )
};

export default Footer;