import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/frontend-assets/assets'
import { useContext } from 'react'
import { Playercontext } from '../../context/playercontext'

const Display = () => {

  const {albumData} = useContext(Playercontext)

const displayref = useRef()
const location = useLocation()
const isAlbum = location.pathname.includes("album");
const albumId = isAlbum ? location.pathname.split('/').pop() : ""
const bgcolor = isAlbum && albumData.length >0 ? albumData.find((x)=>(x._id == albumId)).bgcolor: "#000000"

useEffect(() => {
  if (isAlbum && albumsData[Number(albumId)]) {
    displayref.current.style.background = `linear-gradient(to bottom, ${bgcolor}, black)`;
  } else {
    displayref.current.style.backgroundColor = 'black';
  }
}, [location]);



  return (
    <div ref={displayref} className='w-[100%] -2 px-6 pt-4 rounded bg-[black] text-white overflow-auto lg:w-[75] lg:ml-0 '>
      
      {

albumData.length >0 ?

<Routes>

<Route path='/' element={<DisplayHome/>}/>
<Route  path='/album/:id' element={<Displayalbum  album={albumData.find((x)=>(x._id == albumId))}  />} />
</Routes>
: null

      }
      
    </div>
  )
}

export default Display
