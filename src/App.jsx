import React from 'react';
import Navbar from './components/Navbar.jsx';
import LandingPage from './components/LandingPage.jsx';
import Marquee from './components/Marquee.jsx';


const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
  
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      
    </div>
  )
}

export default App
