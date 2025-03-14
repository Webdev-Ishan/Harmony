import React, { useState, useEffect } from "react";
import { assets } from "../assets/admin-assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";
const Addsong = () => {
  const [image, setImage] = useState(null);
  const [song, setSong] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [album, setAlbum] = useState("none");
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("album", album);
      formData.append("audio", song);
      formData.append("image", image);

      const response = await axios.post(`${url}/api/song/add`, formData);

      if (response.data.success) {
        toast.success("Song Added");
        setName("");
        setDesc("");
        setImage(false);
        setSong(false);
        setAlbum("none");
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
    <form
      onSubmit={submitHandler}
      className="flex flex-col items-start gap-8 text-black"
    >
      <div className="flex flex-col gap-4">
        <p>Upload Song</p>
        <input
          onChange={(e) => setSong(e.target.files[0])}
          type="file"
          id="song"
          accept="audio/*"
          hidden
        />
        <label htmlFor="song">
          <img
            src={assets.upload_song}
            alt="Upload Song"
            className="w-24 cursor-pointer"
          />
        </label>
      </div>

      <div className="flex flex-col gap-4">
        <p>Upload Image</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          accept="image/*"
          hidden
        />
        <label htmlFor="image">
          <img
            src={assets.upload_area}
            alt="Upload Image"
            className="w-24 cursor-pointer"
          />
        </label>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(40vw,250px)]"
          placeholder="Type here"
          required
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(40vw,250px)]"
          placeholder="Type here"
          required
          type="text"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select
          onChange={(e) => setAlbum(e.target.value)}
          value={album}
          className="bg-transparent outline-green-500 border-2 border-black p-2 w-[max(10vw,25px)]"
        >
          <option value="none">None</option>
          {albumData.map((album) => (
            <option key={album._id} value={album._id}>
              {album.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="border-black border-2 text-white bg-gradient-to-r from-violet-700 to-blue-700 font-medium w-24 text-md px-4 py-2 mb-2 hover:opacity-75"
      >
        Add
      </button>
    </form>
  );
};

export default Addsong;
