import { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios';

export const Playercontext = createContext();

const PlayercontextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const url = 'http://localhost:4000';

  const [songsData, setSongsData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [track, setTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (!track) {
      console.error("No valid track to play.");
      return;
    }
    audioRef.current.src = track.audio;
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithID = async (id) => {
    const selectedTrack = songsData.find((item) => item._id === id);
    if (!selectedTrack) {
      console.error("Track not found!");
      return;
    }
    setTrack(selectedTrack);
    await new Promise((resolve) => setTimeout(resolve, 100)); 
    if (audioRef.current) {
      audioRef.current.src = selectedTrack.audio;
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const previous = async () => {
   songsData.map(async(item,index)=>{

    if(track._id === item._id && index>0){
await setTrack(songsData[index-1])
await audioRef.current.play()
setPlayStatus(true);

    }

   })
  };

  const next = async () => {
   

    songsData.map(async(item,index)=>{

      if(track._id === item._id && index<songsData.length){
  await setTrack(songsData[index+1])
  await audioRef.current.play()
  setPlayStatus(true);
  
      }
  
     })

  };

  const seekSong = async (e) => {
    if (audioRef.current) {
      const seekTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
    }
  };

  const getSongData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      if (response.data.song && response.data.song.length > 0) {
        setSongsData(response.data.song);
        setTrack(response.data.song[0]);  
      }
    } catch (error) {
      console.error("Error fetching songs data:", error);
    }
  };

  const getAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumData(response.data.allAlbum);
    } catch (error) {
      console.error("Error fetching album data:", error);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }
  }, [audioRef.current]);

  useEffect(() => {
    getSongData();
    getAlbumData();
  }, []);

  return (
    <Playercontext.Provider
      value={{
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        playWithID,
        previous,
        next,
        seekSong,
        songsData,
        albumData,
      }}
    >
      {props.children}
      {/* Hidden audio element to control playback */}
      <audio ref={audioRef} controls style={{ display: "none" }} />
    </Playercontext.Provider>
  );
};

export default PlayercontextProvider;
