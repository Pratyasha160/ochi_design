
import React from 'react'
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-4 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap '>
        <motion.h1
          initial={{x:"0"}}
          animate={{x:"-100%"}}
          transition={{ease:"linear",repeat:Infinity, duration:5}}
          className='text-[11vw] leading-none font-["Founders_Grotesk-X_Condensed"] uppercase pt-10 mb-5 font-semibold pr-10'
         >we are ochi
         </motion.h1>

        <motion.h1
          initial={{x:"0"}}
          animate={{x:"-100%"}}
          transition={{ease:"linear",repeat:Infinity, duration:5}}
          className='text-[11vw] leading-none font-["Founders_Grotesk-X_Condensed"] uppercase pt-10 mb-5 font-semibold pr-10'>
          we are ochi
           </motion.h1>

           <motion.h1
          initial={{x:"0"}}
          animate={{x:"-100%"}}
          transition={{ease:"linear",repeat:Infinity, duration:5}}
          className='text-[11vw] leading-none font-["Founders_Grotesk-X_Condensed"] uppercase pt-10 mb-5 font-semibold pr-10'>
          we are ochi
           </motion.h1>

        </div>
    </div>
  )
}

export default Marquee;


// import { motion } from 'framer-motion';
//
// <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className='text-[11vw] leading-none font-["Founders_Grotesk-X_Condensed"] uppercase pt-10 mb-5 font-semibold'>we are ochi </motion.h1>









// py-20 rounded-tl-3xl rounded-tr-3xl

// -border-t-2 border-b-2 border-zinc-300 flex-gap-10 overflow-hidden whitespace-nowrap
//className='text-[17vw] leading-none font-["Founders_Grotesk-X_Condensed" uppercase pt-10  font-semibold]'