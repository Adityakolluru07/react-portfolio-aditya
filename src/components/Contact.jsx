import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-100}}
          transition={{duration:0.5}}
          className="my-10 text-center text-4xl">Get in Touch
        </motion.h2>
        <div className="text-center tracking-tighter">
            {/* <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p> */}
            <a href="https://linkedin.com/in/adityasaikolluru">
              <motion.p 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className="my-4">Linked IN
              </motion.p>
            </a>
            <a href="https://github.com/Adityakolluru07">
              <motion.p
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}} 
                className="my-4">GitHub
              </motion.p>
            </a>
            <motion.a 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:100}}
              transition={{duration:1}}
              href="#" className="border-b">{CONTACT.email}</motion.a>
            <motion.p 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1}}
              className="my-4">Copyright © 2024 Aditya Kolluru. All rights are reserved</motion.p>
        </div>
    </div>
  )
}

export default Contact