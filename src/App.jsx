import React, { useContext } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/Display'
import { Playercontext } from '../context/playercontext'

const App = () => {

const {audioRef,track} = useContext(Playercontext)

  return (
    <div className=' w-screen h-screen bg-black'>
      <div className='h-[90%] flex'>
    <Sidebar/>
    <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App

