import React from 'react'

const AlbumItem = ({image,name,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-gradient-to-r from-violet-800 to-blue-800 border-1 border-white duration-300 mr-2'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItem
