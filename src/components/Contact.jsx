import {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs  from '@emailjs/browser'

import { styles } from '../style'
import { EarthCanvas } from './canvas'
import sectionwrapper from '../hoc/sectionwrapper'
import { slideIn } from '../utils/motion'

//temp id:     template_2qllzwr
//servic:      service_kmz63ug
//public key:m 48rQeKDz0pdXo7PAd
//privert:     39FBiI-3WPX9-Dw8_x9YI
const Contact = () => {
  const [Form,setform]=useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setloading]=useState(false);
  const handelchange=(e)=>{
    e.preventDefault();
    setform({...Form,[e.target.name]:e.target.value})
  }
  
  const handelsubmit=(e)=>{
    e.preventDefault();
    setloading(true);
    emailjs.send('service_kmz63ug','template_2qllzwr',{
      from_name:Form.name,
      to_name:'priyanshu',
      from_email:Form.email,
      to_email:'aidpriyanshu@gmail.com',
      message:Form.message,
    },'48rQeKDz0pdXo7PAd').then(()=>{
      setloading(false);
      alert(`Thank you ${Form.name} i will get back to you as soon as possible`);
    },(error)=>{
      alert(`Network problem ${error}`)
    })

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left' ,'tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl ' >
         <p className={styles.sectionSubText}>GEt in touch</p>
         <h3 className={styles.sectionHeadText}>Contect</h3>
         <form  onSubmit={handelsubmit} className='mt-12 flex flex-col gap-8 '>
          <label htmlFor="name">
            <span className='block text-white font-medium mb-4'> Your name</span>
            <input type="text" name='name' value={Form.name} onChange={handelchange} placeholder='Enter your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium w-full' />
          </label>
          <label htmlFor="email">
            <span className='block text-white font-medium mb-4'> Email</span>
            <input type="email" name='email' value={Form.email} onChange={handelchange} placeholder='Enter your email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium w-full' />
          </label>
          <label htmlFor="message">
            <span className='block text-white font-medium mb-4'> message</span>
            <textarea type="text" name='message' value={Form.message} onChange={handelchange} placeholder='Enter your message' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium w-full sm:h-[250px] h-[100px]'/>
          </label>
          <button type='submit' className=' bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading? 'sending...':'send'}</button>
         </form>
      </motion.div>
      <motion.div  variants={slideIn('right' ,'tween',0.2,1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default sectionwrapper(Contact,"contact");