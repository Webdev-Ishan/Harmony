import React from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/Display'

const App = () => {
  return (
    <div className=' w-screen h-screen bg-black'>
      <div className='h-[90%] flex'>
    <Sidebar/>
    <Display/>
      </div>
      <Player/>
    </div>
  )
}

export default App

