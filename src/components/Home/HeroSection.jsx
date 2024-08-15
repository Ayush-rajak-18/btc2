import React from 'react'
import HeroSectionImg from "../../Images/HeroSectionImg.jpg"

var sectionStyle = {
  
  backgroundImage: `url(${ HeroSectionImg })`,
  backgroundPosition: "center",
  backgroundSize: 'cover',
  width: "100%",
  height: "450px",
};


function HeroSection() {

  return (
    <div>
      
      <div className="max-w-7xl  relative rounded-lg"  style={ sectionStyle }>
      
       <h1 className='text-center sm:text-2xl text-lg text-gray-950 font-bold relative top-36 '>Enjoy Your Dream Vacations</h1>
       <h3 className=' text-center  text-gray-950 font-bold sm:text-lg text-md relative top-40'>Plan and book our perfect trip with expert advice, travel tips, <br/>destination information and  inspiration from us</h3>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default HeroSection
