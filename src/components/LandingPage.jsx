import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">

        <div className="textstructure mt-52 px-20">

            {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{return    (<div key={index} className="masker">
              <div className="flex items-baseline">
              {index===1 && (<div className="w-[7.5vw] h-[5vw] bg-red-500 mb-3 mr-2"></div>)}
              <h1 className="font-['Founders_Grotesk_X-Condensed'] text-[8vw]  font-semibold  leading-[6.5vw]">{item}</h1>
              </div>
               

            </div>)})}
         

        </div>

        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center-safe py-5 px-20 ">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{return   <p className="text-md font-light tracking-tight leading-none" key={index}>{item}</p>})}
<div className="start flex items-center gap-5">
    <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-lighter text-sm capitalize">Start the Project</div>
    <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex justify-center"> <span className="rotate-[45deg] flex justify-center items-center"><FaArrowUpLong/></span></div>

</div>
        </div>




    

       


    
    </div>
  )
}

export default LandingPage
