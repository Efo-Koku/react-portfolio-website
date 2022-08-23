import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
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
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Efo, welcome to my portfolio website. Enjoy having a look around.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur laboriosam sapiente magni saepe quaerat, voluptatibus fuga necessitatibus eos dolorum et quis? Amet hic impedit, illum optio doloribus labore voluptatum quis molestiae! Distinctio, voluptate temporibus dolores quisquam, deleniti molestias autem quaerat voluptatibus, totam cumque mollitia reiciendis facere libero cupiditate unde.
                  </p>
                </div>
          </div>
        </div>
      </div>
  )
}

export default about