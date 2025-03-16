import React, { useContext } from 'react';
import Sidebar from './components/sidebar';
import Player from './components/player';
import Display from './components/Display';
import { Playercontext } from '../context/playercontext';

const App = () => {
  const { audioRef, track, songsData } = useContext(Playercontext);

  

  return (
    <div className='w-screen h-screen bg-black'>
   
{

songsData.length !== 0
?
<>

<div className='h-[90%] flex'>
        <Sidebar songsData={songsData} />
        <Display songsData={songsData} />
      </div>
      <Player />



</>
: null
}

      <audio ref={audioRef} src={track?track.file: "not found"} preload='auto'></audio>
    </div>
  );
};

export default App;

