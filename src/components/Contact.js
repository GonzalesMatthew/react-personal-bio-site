import React from 'react';
import icons from '../helpers/iconPaths';

function Contact() {
  return (
    <>
      <a href="https://www.linkedin.com/in/matthewggonzales" rel="noreferrer" target="_blank"><img className='contact-icons' src={icons.linkedin} alt="linkedin icon"/></a>
      <a href="https://github.com/GonzalesMatthew" rel="noreferrer" target="_blank"><img className='contact-icons' src={icons.github} alt="github icon"/></a>
      <img className='contact-icons2' src={icons.gmail} alt="g-mail icon"/>
      gonzalesmattg@gmail.com
    </>
  );
}
export default Contact;
