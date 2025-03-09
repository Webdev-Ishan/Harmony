import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
const Navbar = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
   <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
   <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
      </div>

<div className='flex items-center gap-4'>

<p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden  md:block cursor-pointer border-1 hover:border-green-600'>Get Premium</p>
<p className='bg-gradient-to-r from-violet-700 to-blue-700 text-black text-[15px] border-1 px-4 py-1 duration-300 hover:border-yellow-400 rounded-2xl hidden  md:block cursor-pointer'>Install App</p>
<p className='bg-gradient-to-r from-violet-700 to-blue-700 font-light text-white w-7 h-7 rounded-full flex items-center justify-center border-1 border-white'>I</p>
</div>
    </div>

<div className='flex items-center gap-2 mt-4'>

<p className='bg-white text-black px-4 py-1 rounded-2xl hover:bg-gradient-to-r from-violet-700 to-blue-700 duration-500 cursor-pointer'>
  All

</p>
<p className='bg-white text-black px-4 py-1 rounded-2xl hover:bg-gradient-to-r from-violet-700 to-blue-700 duration-500 cursor-pointer'>
  Music

</p>
<p className='bg-white text-black px-4 py-1 rounded-2xl hover:bg-gradient-to-r from-violet-700 to-blue-700 duration-500 cursor-pointer'>
  Podcaste

</p>
</div>

    </>
  )
}

export default Navbar
