import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { motion } from 'framer-motion'

import { styles } from '../style'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import sectionwrapper from '../hoc/sectionwrapper'
const ExperienceCard = (a) => (
  <VerticalTimelineElement
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    iconStyle={{ background: a.experience.iconBg }}
    date={a.experience.date}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={a.experience.icon} alt={a.experience.comapany_name}
          className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {a.experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{a.experience.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
        {a.experience.points.map((point,index)=>(
          <li key={`exprience-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-winder'>
                {point}
          </li>
        ))}
    </ul>
  </VerticalTimelineElement>
)
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
      </motion.div>
      <div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default sectionwrapper(Experience, 'experience')