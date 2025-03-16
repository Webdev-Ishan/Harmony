import React, { useContext } from 'react'
import { Playercontext } from '../../context/playercontext'
const songItem = ({name,image,desc,id}) => {

const { playWithID } = useContext(Playercontext)

  return (
    <div onClick={()=>playWithID(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer  hover:bg-gradient-to-r from-violet-700 to-blue-700'>
      <img className='rounded' src={image} alt="" />
     <p className='font-bold mt-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default songItem
