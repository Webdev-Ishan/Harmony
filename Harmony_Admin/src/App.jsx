import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Addsong from './pages/Addsong'
import Addalbum from './pages/Addalbum'
import Listsong from './pages/Listsong'
import Listalbum from './pages/Listalbum'
import Sidebar from './components/sidebar'
import Navbar from './components/Navbar';


export const url ='http://localhost:4000'

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>

<Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-white border-2 border-black'>
        <Navbar/>
<div className='pt-8 pl-5 sm:pt-15 sm:pl-12'>
  <Routes>

<Route path='/add-song' element={<Addsong/>}/>
<Route path='/add-album' element={<Addalbum/>}/>
<Route path='/list-song' element={<Listsong/>}/>
<Route path='/list-album' element={<Listalbum/>}/>


  </Routes>


</div>


      </div>


    
    </div>
  )
}

export default App

