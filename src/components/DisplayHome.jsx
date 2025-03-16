import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './songItem'
import { useContext } from 'react'
import { Playercontext } from '../../context/playercontext'

const DisplayHome = () => {

const {songsData,albumData} = useContext(Playercontext)

  return (
    <>
      <Navbar/>
      <div className='mb-4 '>
<h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
<div className='flex overflow-auto'>
{albumData.map((items, index)=>(<AlbumItem  key={index} name={items.name} desc={items.desc} id={items._id} image={items.image}/>))}
</div>


      </div>

      <div className='mb-4 '>
<h1 className='my-5 font-bold text-2xl'>Today's Trending</h1>
<div className='flex overflow-auto'>
{songsData.map((items,index)=>( <SongItem key={index} name={items.name} desc={items.desc} id={items._id} image={items.image}  /> ))}
</div>


      </div>
    </>
  )
}

export default DisplayHome
