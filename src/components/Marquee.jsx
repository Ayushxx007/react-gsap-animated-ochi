import React from 'react'
import {motion} from 'framer-motion';




const Marquee = () => {
  return (
    <div className="w-full py-20 bg-[#004d43] rounded-tr-3xl rounded-tl-3xl ">
      <div className="text border-t-2 border-b-2 border-zinc-800 flex whitespace-nowrap overflow-hidden flex gap-10">
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:2}} className="text-[16vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase -mb-10 pt-10">we are ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:2}} className="text-[16vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase -mb-10 pt-10">we are ochi</motion.h1>
      <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:2}} className="text-[16vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold uppercase -mb-10 pt-10">we are ochi</motion.h1>
        
      </div>
    </div>
  )
}

export default Marquee;  