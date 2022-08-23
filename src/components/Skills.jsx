import React from 'react'

import HTML from '../assets/html-logo.png';
import CSS from '../assets/css-logo.png';
// import GitHub from '../assets/GitHub-Logo.png';
import JavaScript from '../assets/Javascript_Logo.png';
import ReactLogo from '../assets/react-logo.png';
// import MongoDB from '../assets/mongodb-logo.png';




const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#02171c] text-gray-300'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>

                {/* <div className='shadow-md shadow-[#90c5d2] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div> */}

                <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>

                <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>

                {/* <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDB } alt="MongoDB icon" />
                    <p className='my-4'>MongoDB</p>
                </div> */}

                {/* <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#90c5d2]  hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div> */}
            </div>
        </div>
    </div>
  );
};

export default Skills