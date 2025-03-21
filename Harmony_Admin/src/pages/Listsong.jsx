import React, { useState, useEffect } from "react";
import { url } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const Listsong = () => {
  const [data, setData] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);

      if (response.data.success) {
        console.log(response.data.song);
        setData(response.data.song);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error ocurred");
    }
  };

  const removesong = async (id) => {
    try {
      const response = await axios.post(`${url}/api/song/remove`, { id });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchSongs();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Songs List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-blue-500 border-2 border-black">
          <thead>
            <tr>
              <th className="px-4 py-2 text-white">Image</th>
              <th className="px-4 py-2 text-white">Name</th>
              <th className="px-4 py-2 text-white">Album</th>
              <th className="px-4 py-2 text-white">Duration</th>
              <th className="px-4 py-2 text-white">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((song) => (
              <tr key={song.id} className="bg-blue-700 hover:bg-blue-600">
                <td className="border px-4 py-2 border-white">
                  <img
                    src={song.image}
                    alt={song.name}
                    className="w-16 h-16"
                  />
                </td>
                <td className="border px-4 py-2 text-white">{song.name}</td>
                <td className="border px-4 py-2 text-white">   {song.album}</td>
                <td className="border px-4 py-2 text-white">{song.duration}</td>
                <td className="border px-4 py-2 text-white">
                  <button
                    onClick={() => removesong(song._id)}
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

export default Listsong;
