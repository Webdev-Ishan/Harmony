import React, { useEffect, useRef } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './displayalbum'
import { albumsData } from '../assets/frontend-assets/assets'

const Display = () => {

const displayref = useRef()
const location = useLocation()
const isAlbum = location.pathname.includes("album");
const albumId = isAlbum ? location.pathname.slice(-1) : "";
const bgcolor = albumsData[Number(albumId)] ? albumsData[Number(albumId)].bgColor : 'black';

useEffect(() => {
  if (isAlbum && albumsData[Number(albumId)]) {
    displayref.current.style.background = `linear-gradient(to bottom, ${bgcolor}, black)`;
  } else {
    displayref.current.style.backgroundColor = 'black';
  }
}, [location]);



  return (
    <div ref={displayref} className='w-[100%] -2 px-6 pt-4 rounded bg-[black] text-white overflow-auto lg:w-[75] lg:ml-0 '>
      
      <Routes>

        <Route path='/' element={<DisplayHome/>}/>
        <Route  path='/album/:id' element={<Displayalbum/>} />
      </Routes>
    </div>
  )
}

export default Display
