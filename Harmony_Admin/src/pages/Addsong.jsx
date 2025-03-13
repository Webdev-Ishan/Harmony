import React, { useState } from "react";
import { assets } from "../assets/admin-assets/assets";
const Addsong = () => {


const [image,setimage] = useState(flase)
const [song,setsong] = useState(flase)
const [name,setname] = useState("")
const [desc,setdesc] = useState("")
const [album,setalbum] = useState("none")
const [loading,setloading] = useState(flase)
const [albumdata,setalbumdata] = useState([])

  return (
    <div>
      <form action="" className="flex flex-col items-start gap-8 text-black ">
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <p>Upload Song</p>
            <input type="file" id="song" accept="audio/*" hidden />
            <label htmlFor="song">
              <img
                src={assets.upload_song}
                alt=""
                className="w-24 cursor-pointer"
              />
            </label>
          </div>

<div className="flex flex-col gap-4">
<p>Upload Image</p>
<input type="file" id="image" accept="image/*" hidden />
<label htmlFor="image">
              <img
                src={assets.upload_area}
                alt=""
                className="w-24 cursor-pointer"
              />
            </label>
</div>

        </div>


<div className="flex flex-col gap-2.5">
  <p>Song Name</p>
  <input className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(40vw,250px)] " placeholder="Type here" required type="text" />


</div>


<div className="flex flex-col gap-2.5">
  <p>Song Description</p>
  <input className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(40vw,250px)] " placeholder="Type here" required type="text" />


</div>


<div className="flex flex-col gap-2.5">
<p>Album</p>
<select className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(10vw,25px)]">
<option value="none">None</option>
</select>

</div>

<button type="submit" className="border-black border-2 text-white bg-gradient-to-r from-violet-700 to-blue-700 font-medium w-24 text-md px-4 py-2 mb-2 hover:opacity-75 ">Add</button>

      </form>
    </div>
  );
};

export default Addsong;
