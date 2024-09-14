import React from "react";
import toast from "react-hot-toast";
import { RxCopy } from "react-icons/rx";

const Btn12 = () => {
  const handleCopy = () => {
    const code = `<button className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium border rounded-md border-slate-200 group text-neutral-950 bg-neutral-100">
          <span>Hover me</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative w-4 h-full bg-neutral-700"></div>
          </div>
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
        <button className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium border rounded-md border-slate-200 group text-neutral-950 bg-neutral-100">
          <span>Hover me</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative w-4 h-full bg-neutral-700"></div>
          </div>
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

export default Btn12;
