import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e8eced] text-gray-500'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
       <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>
                  About
                </p> 
            </div>
            <div></div>
            </div>
              <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-2xl font-bold'>
                    <p>Hi, I'm Efo, welcome to my portfolio website. Enjoy having a look around.</p>
                </div>
                <div>
                  <p> I am a software developer focused on building the frontend of web applications. I enjoy creating clean and simple interfaces that incorporate good design skills that allow for a positive user experience. I enjoy what I do and I remain inquisitive and excited by the prospect of improving my existing skills and learning new ones.
                  </p>
                </div>
          </div>
        </div>
      </div>
  )
}

export default about