import React from 'react';
import { github, instagram } from '../assets';
const Footer = () => {
  return (
    <section className='mt-[30vh] white-glassmorphism p-8'>
      <p className='text-[#ae85ff] w-[90vw]  m-5 font-poppins text-sm break-words'>
        <span className='block mb-4 flex justify-center'>
          All right reserved @anshulbadoni
        </span>
        
        <span className='block mb-4 flex justify-center'>
          <a href="https://github.com/AnshulBadoni">
          <img className=' h-6 mr-5' src={github} alt="" />
          </a>
          
          <a href="https://www.instagram.com/anshulbadoni359/">
          <img className='h-6' src={instagram} alt="" />
          </a>
        </span>
      </p>
    </section>
  );
};

export default Footer;
