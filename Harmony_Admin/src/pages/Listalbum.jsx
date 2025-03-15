import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify'
import { url } from '../App';

const Listalbum = () => {

const [data,setData] = useState([]);

const fetchdata = async ()=>{

try {


  const response = await axios.get(`${url}/api/album/list`);

  console.log(response)
  
  if(response.data.success){

setData(response.data.allAlbum)

  }
  else{

    toast.error("Something went wrong")
  }
  
} catch (error) {
  console.log(error.message)
  toast.error("Error occurred")
}


}


const removeAlbum = async (id) => {
  try {
    const response = await axios.post(`${url}/api/album/remove`, { id });

    if (response.data.success) {
      toast.success(response.data.message);
      await fetchdata();
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};



useEffect(() => {
  fetchdata()
}, [])


    
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">All Albums List</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-blue-500 border-2 border-black">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-white">Image</th>
                  <th className="px-4 py-2 text-white">Name</th>
                  <th className="px-4 py-2 text-white">Description</th>
                  <th className="px-4 py-2 text-white">Background Colour</th>
                  <th className="px-4 py-2 text-white">Action</th>
                </tr>
              </thead>
    
              <tbody>
                {data.map((album) => (
                  <tr key={album.id} className="bg-blue-700 hover:bg-blue-600">
                    <td className="border px-4 py-2 border-white">
                      <img
                        src={album.image}
                        alt={album.name}
                        className="w-16 h-16"
                      />
                    </td>
                    <td className="border px-4 py-2 text-white">{album.name}</td>
                    <td className="border px-4 py-2 text-white">{album.desc}</td>
                    <td className="border px-4 py-2 text-white">
                      <div
                        style={{ backgroundColor: album.bgColour }}
                        className="w-16 h-16"
                      ></div>
                    </td>
                    <td className="border px-4 py-2 text-white">
                      <button
                         onClick={() => removeAlbum(album._id)} // Uncomment and implement removeAlbum function
                        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
    


export default Listalbum
