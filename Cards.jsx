import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019-2022</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className=' relative card rounded-xl w-1/2 h-full bg-[#a8d4ce] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
                <button className='absolute px-5 py-1 rounded-full border-2 left-0 bottom-10 right-0 text-10'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards



