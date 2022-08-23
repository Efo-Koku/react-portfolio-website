import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

{/* Container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-yellow-600'>Hi, my name is</p>
    <h4 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]' >Efo-Koku Avornyo</h4>
    <h5 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h5>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm almost done with finishing an MSc in Software Engineering at Cardiff University</p>

<div>
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>View Work
    <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-3'/>
    </span>
    </button>
</div>
</div>
    </div>
  )
}

export default Home