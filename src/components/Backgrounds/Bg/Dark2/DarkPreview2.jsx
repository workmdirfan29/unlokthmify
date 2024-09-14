import React from "react";
import { FaTimes } from "react-icons/fa";

const DarkPreview2 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-gray-950 bg-opacity-90">
      <div className="relative w-[80%] h-[90vh] p-6 bg-slate-800 rounded-lg shadow-lg">
        <button
          className="absolute text-gray-400 transition-colors duration-300 top-2 right-2 hover:text-gray-200"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="relative z-[99] w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <div className="relative flex items-center justify-center w-full h-full p-4">
            <p className="text-sm text-slate-400">Dark Preview Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkPreview2;