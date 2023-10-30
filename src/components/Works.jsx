import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github } from "../assets"
import sectionwrapper from "../hoc/sectionwrapper"
import { projects } from "../constants"
import {fadeIn,textVariant} from '../utils/motion'

const Projectcard=({index,name,description,tags,image,source_code_link})=>{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt option={{max:45,scale:1,speed:450}} className="bg-tertiary p-5 rounded-2x1 w-[360px]">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => { window.open(source_code_link, '_blank') }} className="black-gradient w-10 h-10 rounded-fill flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secoindary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex felx-wrap gap-2">
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}> Project.</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p className="mt-3 text-secoundary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("","",0.1,1)}>
        Following project showcase my skills and exprience through
        real-world example of my work. each project is brifly decribed with links to code repositories and live demos in it. It reflects my ability to solve complex problem ,work with different technologies and manage project effectively

      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project,index)=>(
        <Projectcard key={`project-${index}`} {...project}/>
      ))}
    </div>
    </>

  )
}

export default sectionwrapper(Works,"work")