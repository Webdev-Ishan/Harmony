import React from 'react'
import { Route,Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './displayalbum'

const Display = () => {
  return (
    <div className='w-[100%] -2 px-6 pt-4 rounded bg-[black] text-white overflow-auto lg:w-[75] lg:ml-0 '>
      
      <Routes>

        <Route path='/' element={<DisplayHome/>}/>
        <Route  path='/album/:id' element={<Displayalbum/>} />
      </Routes>
    </div>
  )
}

export default Display
