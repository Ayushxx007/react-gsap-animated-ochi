import React, { useEffect,useState } from 'react'


const Eyes = () => {

  const [rotate,setRotate]=useState(0);

  
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
  
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
  
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    // ✅ Clean up on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  







  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className=" relative flex justify-center items-center w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">

      <div className="absolute  flex  gap-10   ">

      <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">

        <div style={{transform:`  rotate(${rotate}deg)`}}  className="line w-full h-10">
        <div className="w-10   h-10 rounded-full bg-zinc-100"></div>
        </div>

       
        </div>

      </div>
      <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">

        <div style={{transform:` rotate(${rotate}deg)`}} className="line w-full h-10">
        <div className="w-10   h-10 rounded-full bg-zinc-100"></div>
        </div>

       
        </div>

      </div>
      

      </div>
      </div>
      
    </div>
  )
}

export default Eyes
