import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Playercontext } from '../../context/playercontext'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/frontend-assets/assets'
import { assets } from '../assets/frontend-assets/assets'
const Displayalbum = () => {
const {id} = useParams()
const albumdata = albumsData[id];


const { playwithID } = useContext(Playercontext)

  return (
    <>
    <div>
      <Navbar/>

      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>

<img className='w-48 rounded' src={albumdata.image} alt="" />
<div className='flex flex-col'>
    <p>PlayList</p>
<h2 className='text-5xl font-bold mb-4 md:text-7xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>{albumdata.name}</h2>
<h4>{albumdata.desc}</h4>
<p className='mt-1'>
    <img className='inline-block w-10 rounded-4xl' src="https://img.freepik.com/free-photo/3d-render-music-note-illustration-design_460848-8745.jpg?ga=GA1.1.1403713484.1741600599&semt=ais_hybrid" alt="" />
<b className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'> Harmony   </b>
<b className='text-green-500'>  50 songs </b>
  about 2hr 30 min

</p>
</div>
      </div>
    </div>

<div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-white'>
<p><b className='mr-4' >#</b>Title</p>
<p>Album</p>
<p className='hidden sm:block'>Date Added</p>
<img className='m-auto w-4' src={assets.clock_icon} alt="" />

</div>
<hr />
{

    songsData.map((items,index)=>(
  <div onClick={()=>playwithID(items.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer hover:bg-gradient-to-r from-violet-700 to-blue-700'>

<p className='text-white'>
<b className='mr-4 text-green-500'>{index+1}</b>
<img className='inline w-10 mr-5 border-1 border-green-500' src={items.image} alt="" />
{items.name}
</p>

<p className='text-[15px]'>{albumdata.name}</p>
<p className='text-[15px]'>5 Days ago</p>
<p className='text-[15px] text-center'>{items.duration}</p>
  </div>

    ))
}
    </>
  )
}

export default Displayalbum
