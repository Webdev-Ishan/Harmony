import React,{useState} from 'react'
import { assets } from '../assets/admin-assets/assets'
import axios from 'axios'
import { toast } from "react-toastify";
import { url } from "../App";


const Addalbum = () => {

const [image, setImage] = useState(null);
  const [colour, setcolour] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  


const onSubmithandler = async (e)=>{

e.preventDefault();
setLoading(true)


try {
  

  const formData = new FormData();

  formData.append("name", name);
  formData.append("desc", desc);
  formData.append("bgColour", colour);
  formData.append("image", image);

  const response = await axios.post(`${url}/api/album/add`,formData);


      if (response.data.success) {
        toast.success("Album Added");
        setName("");
        setDesc("");
        setImage(false);
        setcolour(null)

      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {


      toast.error("Error occurred");
      console.log(error.message);
    }
    setLoading(false);


};

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <p>Loading...</p>
    </div>
  ) : (
    <form onSubmit={onSubmithandler} action="" className='flex flex-col items-start gap-8 text-gray-600'>

<div className='flex flex-col gap-4'>
<p>Upload Image</p>
<input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image'  accept="image/*"
 hidden />

<label htmlFor="image">

  <img className='w-24 cursor-pointer' src={assets.upload_area} alt="" />
</label>
</div>


<div className="flex flex-col gap-2.5">
        <p>Album Name</p>
        <input
        onChange={(e)=>setName(e.target.value)}
        value={name}
          className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(40vw,250px)]"
          placeholder="Type here"
          required
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album Description</p>
        <input
        onChange={(e)=>setDesc(e.target.value)} value={desc}
          className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(40vw,250px)]"
          placeholder="Type here"
          required
          type="text"
        />
      </div>

<div className='flex flex-col gap-3'>
<p>Background Colour</p>
<input onChange={(e)=>setcolour(e.target.value)} value={colour} type="color" />

</div>

<button
        type="submit"
        className="border-black border-2 text-white bg-gradient-to-r from-violet-700 to-blue-700 font-medium w-24 text-md px-4 py-2 mb-2 hover:opacity-75"
      >
        Add
      </button>

    </form>
  )
}

export default Addalbum
