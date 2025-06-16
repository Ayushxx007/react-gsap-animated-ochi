import React from 'react'

function Cards() {
  return (
    <div className="w-full h-[70vh] bg-zinc-900 flex gap-5 items-center px-32">
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative w-full h-full rounded-xl bg-[#004d43] flex justify-center items-center">
            <img className="bg-cover w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className="absolute px-3 py-1 border-2 left-6 rounded-full bottom-8">&copy;2019-2025</button>

        </div>
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative w-1/2 h-full flex justify-center items-center  rounded-xl bg-[#012420]">
        <img className="bg-cover w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
        <button className="absolute px-3 py-1 border-2 left-6 rounded-full bottom-8">&copy;2019-2025</button></div>
        <div className="card w-1/2 relative  rounded-xl h-full flex justify-center items-center bg-[#212121]">
        <img className="bg-cover w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
        <button className="absolute px-3 py-1 border-2 left-6 rounded-full bottom-8">&copy;2019-2025</button></div>
        </div>
      
    </div>
  )
}

export default Cards
