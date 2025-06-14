import React from 'react'

const About = () => {
  return (
    <div className="w-full h-screen bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3vw] tracking-tight">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full border-t-[1px] border-[#495719] mt-20 pt-10 flex gap-5">
        <div className="w-1/2">
        <h1 className="text-6xl"> Our Approach :</h1>
        <button className="px-18 py-4 bg-zinc-900 rounded-full text-white mt-8 flex gap-10 items-center" >ReadMore
            <div className="w-2 h-2 bg-zinc-100 rounded-full"> </div>
            
        </button>
       
        </div>
        
        <div className="w-1/2 h-[50vh] bg-[#829b32] rounded-3xl"></div>

      </div>
    </div>
  )
}

export default About
