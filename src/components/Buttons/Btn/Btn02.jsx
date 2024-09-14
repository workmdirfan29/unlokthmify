import React from "react";
import toast from "react-hot-toast";
import { RxCopy } from "react-icons/rx";

const Btn02 = () => {
  const handleCopy = () => {
    const code = `<button className="relative h-12 border overflow-hidden rounded bg-white px-5 py-2.5 text-black transition-all duration-300 hover:bg-slate-100 hover:border-slate-200 hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2">
          <span className="relative">Hover me</span>
        </button>`;
    navigator.clipboard.writeText(code).then(() => {
      toast.success("👏 Copied to clipboard!");
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-between show">
      <div
        id="buttonwrapper"
        className="bg-[#dadada2f] rounded-md flex items-center justify-center w-full h-36 md:w-full md:h-48 relative"
      >
        <button className="relative h-12 border overflow-hidden rounded bg-white px-5 py-2.5 text-black transition-all duration-300 hover:bg-slate-100 hover:border-slate-200 hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2">
          <span className="relative">Hover me</span>
        </button>
        <span
          onClick={handleCopy}
          className="absolute top-0 z-10 p-3 cursor-pointer hover:text-slate-950 text-slate-700 right-2 md:right-2"
        >
          <RxCopy size={20} />
        </span>
      </div>
    </div>
  );
};

export default Btn02;