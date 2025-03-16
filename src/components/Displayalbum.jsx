import React, { useContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Playercontext } from '../../context/playercontext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/frontend-assets/assets';

const Displayalbum = ({ album }) => {
  const { id } = useParams();
  const [Albumdata, setAlbumData] = useState(null);
  const { playWithID, songsData, albumData } = useContext(Playercontext);

  useEffect(() => {
    const selectedAlbum = albumData.find((item) => item._id === id);
    if (selectedAlbum) {
      setAlbumData(selectedAlbum);
    }
  }, []);

  return Albumdata ? (
    <>
      <div>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
          <img className='w-48 rounded-lg shadow-lg' src={Albumdata.image} alt={Albumdata.name} />
          <div className='flex flex-col'>
            <p className='text-sm text-gray-400'>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>{Albumdata.name}</h2>
            <h4 className='text-lg text-gray-300'>{Albumdata.desc}</h4>
            <p className='mt-1 flex items-center'>
              <img className='inline-block w-10 rounded-full mr-2' src="https://img.freepik.com/free-photo/3d-render-music-note-illustration-design_460848-8745.jpg?ga=GA1.1.1403713484.1741600599&semt=ais_hybrid" alt="Harmony" />
              <b className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'> Harmony </b>
              <b className='text-green-500 ml-2'> 50 songs </b>
              <span className='text-gray-400 ml-2'>about 2hr 30 min</span>
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-white'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr className='border-gray-700' />
      {songsData.filter((items) => items.album === album.name).map((items, index) => (
        <div key={items._id} onClick={() => playWithID(items._id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center cursor-pointer hover:bg-gradient-to-r from-violet-700 to-blue-700 transition duration-300 ease-in-out'>
          <p className='text-white flex items-center'>
            <b className='mr-4 text-green-500'>{index + 1}</b>
            <img className='inline w-10 mr-5 border-1 border-green-500 rounded' src={items.image} alt={items.name} />
            {items.name}
          </p>
          <p className='text-[15px]'>{Albumdata.name}</p>
          <p className='text-[15px] hidden sm:block'>5 Days ago</p>
          <p className='text-[15px] text-center'>{items.duration}</p>
        </div>
      ))}
    </>
  ) : null;
};

export default Displayalbum;
