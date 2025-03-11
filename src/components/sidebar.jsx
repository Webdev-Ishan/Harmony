import React from 'react'
import {assets} from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'
const sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>

        <div className=' border-1 border-white bg-gradient-to-r from-violet-700 to-blue-700 h-[15%] rounded flex flex-col justify-around'>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>

<img className='w-6' src={assets.home_icon} alt="loading" />
<p onClick={()=>navigate('/')} className='font-bold hover:text-black duration-300'>Home</p>
            </div>


            <div className='flex items-center gap-3 pl-8 cursor-pointer'>

<img className='w-6' src={assets.search_icon} alt="loading" />
<p className='font-bold hover:text-black duration-300'>Search</p>
            </div>




        </div>
      

<div className='border-1 border-white bg-gradient-to-r from-violet-700 to-blue-700 h-[100%] rounded'>
    <div className='p-4 flex items-center justify-between'>
        <div className='fle items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className='font-semibold '>Your Collection</p>

        </div>

<div className='flex items-center gap-3'>
<img className='w-5 text-black' src={assets.arrow_icon} alt="" />
<img className='w-5 text-black' src={assets.plus_icon} alt="" />
</div>

    </div>

<div className=' border-1 border-white p-4 bg-black m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 '>

<h1>Create Your First Collection</h1>
<p className='font-light text-white '>Let us help you in this.</p>
<button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 border-1 border-green-500 hover:bg-gray-300 duration-300'>Create Collection</button>
</div>


<div className=' border-1 border-white p-4 bg-black m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 '>

<h1>Check the latest Podcastes</h1>
<p className='font-light text-white'>Let us inform you in this.</p>
<button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 border-1 border-green-500 hover:bg-gray-300 duration-300'>Browse Podcastes</button>
</div>


</div>



    </div>
  )
}

export default sidebar
