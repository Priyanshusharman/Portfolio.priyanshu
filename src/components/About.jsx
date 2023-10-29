import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../style'
import { services } from '../constants/index'
import {fadeIn,textVariant} from '../utils/motion'
import sectionwrapper from '../hoc/sectionwrapper'
const Servicecard=({index,title,icon})=>{
  return(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn('right','spring',0.5*index,5)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    As a computer science engineering student, I'm always seeking out new challenges and opportunities to expand my skillset.Throughout my academic journey, I've gained expertise in multiple programming languages such as c++, Python, and JavaScript. I also have experience working with databases and building applications. I'm committed to continuous learning and staying up-to-date with the latest technology trends to enhance my skills.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <Servicecard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default sectionwrapper(About,'about');