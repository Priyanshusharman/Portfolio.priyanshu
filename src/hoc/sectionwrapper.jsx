import { motion } from "framer-motion"
import { styles } from "../style"
import { staggerContainer } from "../utils/motion"
export default function sectionwrapper(Component, idname) {
    return (
        function HOC() {
            return (
                <motion.section variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once:true,amount:0.24}}
                    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                    >
                        <span className="hash-span" id={idname}>&nbsp;</span>
                    <Component />
                </motion.section>
            )
        }
    )
}
