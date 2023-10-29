import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../style"
import { ComputersCanvas } from "./canvas/index"
const Hero = () => {
  return (
    <section className='relative w-full h-screen ax-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 square-full bg-[#4cbd49]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white block`}>HI ,I'am <span className='text-[#45a14b]'>Priyanshu</span></h1>
          <p className={`${styles.herosubText} mt-2 text-white-100`}> I am currently study in <br className='sm:block hidden' /> JAYPEE UNIVERSITY</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bootom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about"><div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1' />
        </div></a>

      </div>
    </section>
  )
}

export default Hero