import { motion } from 'framer-motion';
import { styles } from "../styles";
import { bg } from '../assets/';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section id='home' className='w-full relative h-screen mx:auto items-center '>
      <img className=' w-full absolute mt-[80px] select-none' src={bg} alt="" />
        <div
        className={` absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className='select-none'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            iPhone  <span className="text-[#915EFF]">14</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 w-[22vw] text-white-100`}>
            Pro, and beyond.With Latest iOS 16
          </p> <br /><br />
          <a className='rounded-full  hover:-translate-y-1 duration-300 text-white font-bold font-poppins px-7 py-4 bg-[#915EFF] ' href="">
             Buy
             </a>
          &nbsp;
          <a className='rounded-full hover:-translate-y-5 duration-300 text-white font-bold font-poppins px-7 py-4 bg-[#915EFF] ' href="#">Browse</a>
        </div>
      </div>
      <div className='z-[9] sm:mx-[50vw] mx-0 sm:w-[50vw] w-full h-screen '>
      <ComputersCanvas/>
      </div>
       
    </section>
  )
}

export default Hero