import React from 'react'

function Featured() {
  return (
    <div className="w-full py-20">
        <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
            <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">Featured Projects</h1>
          

            </div>
            <div className="px-20">
            <div className="cards w-full flex gap-15 mt-10">
                <div className=" relative   cardcontainer rounded-xl w-1/2 h-[75vh] bg-red-500 ">
               

                <div className=" card w-full h-full bg-green-600 rounded-xl overflow-hidden"> 

                    <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"></img>

                </div>
                
                </div>
                <div className=" relative  cardcontainer rounded-xl w-1/2 h-[75vh] bg-red-500">
              
                <div className=" card w-full h-full rounded-xl bg-green-600 overflow-hidden">

                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"></img>



                </div>
                </div>

        </div>
            </div>
          
      
    </div>
  )
}

export default Featured;
