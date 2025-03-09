import React from 'react'
import Navbar from './Navbar'
import {albumsData} from '../assets/frontend-assets/assets'
import AlbumItem from './AlbumItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4 '>
<h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
<div className='flex overflow-auto'>
{albumsData.map((items, index)=>(<AlbumItem  key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
</div>


      </div>
    </>
  )
}

export default DisplayHome
