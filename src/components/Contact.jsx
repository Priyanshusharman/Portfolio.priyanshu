import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs  from '@emailjs/browser'

import { styles } from '../style'
import { EarthCanvas } from './canvas'
import sectionwrapper from '../hoc/sectionwrapper'
import { slideIn } from '../utils/motion'
const Contact = () => {
  const [from,setform]=useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setloading]=useState(false);
  const handelchange=(e)=>{

  }
  const handelsubmit=(e)={

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left' ,'tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl ' >
         <p className={styles.sectionSubText}>GEt in touch</p>
         <h3 className={styles.section}></h3>
      </motion.div>
    </div>
  )
}

export default sectionwrapper(Contact,"contect");