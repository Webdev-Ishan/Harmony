import React from "react";
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-violet-700 to-blue-700 border-r-2 border-black min-h-screen pl-[5vw]">
      <h1
        style={{ WebkitTextStroke: "1px black" }}
        className="text-white m-5 text-4xl  font-bold"
      >
        Harmony
      </h1>

      <div className="flex flex-col gap-5 mt-10">
        <NavLink
          to={"/add-song"}
          className="flex mr-2 items-center gap-2.5 text-white shadow-black shadow-lg bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 border border-white p-2 rounded-md"
        >
          <p className="hidden sm:block">Add Song</p>
        </NavLink>

        <NavLink
          to={"/list-song"}
          className="flex mr-2 items-center gap-2.5 text-white shadow-black shadow-lg bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 border border-white p-2 rounded-md"
        >
          <p className="hidden sm:block">List Song</p>
        </NavLink>

        <NavLink
          to={"/add-album"}
          className="flex mr-2 items-center gap-2.5 text-white shadow-black shadow-lg bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 border border-white p-2 rounded-md"
        >
          <p className="hidden sm:block">Add Album</p>
        </NavLink>

        <NavLink
          to={"/list-album"}
          className="flex mr-2 items-center gap-2.5 text-white shadow-black shadow-lg bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300 border border-white p-2 rounded-md"
        >
          <p className="hidden sm:block">List Album</p>
        </NavLink>
      </div>
    </div>
  );
};

export default sidebar;
