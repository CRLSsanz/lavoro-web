import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonGoBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-white w-32 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 
        shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Go Back
      </button>
    </div>
  );
};

// font-medium w-32 rounded-2xl text-sm py-2 px-5 text-center mr-2 mb-2 border border-gray-500 hover:bg-[#ec7c6a] hover:text-white
