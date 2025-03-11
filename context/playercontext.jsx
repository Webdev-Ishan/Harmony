import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../src/assets/frontend-assets/assets";

export const Playercontext = createContext();

const PlayercontextProvider = (props)=>{

const audioRef= useRef();
const seekBg= useRef();
const seekBar = useRef();


const [track,settrack] = useState(songsData[0]);
const [playStatus, setPlayStatus] = useState(false)
const [time,setTime] = useState({

    currentTime:{
        second:0,
        minute:0
            },
            totalTime:{
                second:0,
                minute:0
        
            }

})


const play = ()=>{
audioRef.current.play();
setPlayStatus(true)

}


const pause = ()=>{
    audioRef.current.pause();
    setPlayStatus(false)
}


const playwithID = async (id) =>{

    await settrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true)
}


const previous = async () => {
    if (track.id > 0) {
        await settrack(songsData[track.id - 1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
};

const next = async () => {
    if (track.id < songsData.length - 1) {
        await settrack(songsData[track.id + 1]);
        await audioRef.current.play();
        setPlayStatus(true);
    }
};


const seekSong = async (e)=>{

const seekTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
audioRef.current.currentTime = seekTime;
}

useEffect(()=>{

    setTimeout(()=>{
audioRef.current.ontimeupdate = ()=>{

seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"

    setTime({

        currentTime:{
            second:Math.floor(audioRef.current.currentTime %60),
            minute:Math.floor(audioRef.current.currentTime/60)
                },
                totalTime:{
                    second:Math.floor(audioRef.current.duration % 60),
                    minute:Math.floor(audioRef.current.duration / 60)
            
                }

    })
}

    },1000)
},[audioRef])


    const contextValue = {

     audioRef,
     seekBar,
     seekBg,
     track,
     settrack,
     playStatus,setPlayStatus,
     time,setTime,
     play,pause,
     playwithID,
     previous,
     next,
     seekSong
    }

    return (


        <Playercontext.Provider value={contextValue}>

            {props.children}
        </Playercontext.Provider>
    )
}

export default PlayercontextProvider