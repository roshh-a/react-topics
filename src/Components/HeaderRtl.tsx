import React from "react";

export const HeaderRtl: React.FC = () => {
  return (
    <div>
      <div className="border border-b-neutral-500 pb-7 ps-3">
        <div className="flex items-center gap-4">
          <a href="/" className="ps-3">
            Home
          </a>
          <a href="/" className="ps-3">
            Support
          </a>
          <a href="/" className="ps-3">
            Blog
          </a>
          <button className="ms-auto border border-black bg-gray-400 text-white px-4 py-1 cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
