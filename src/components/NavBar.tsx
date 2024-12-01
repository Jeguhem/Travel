import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between items-center text-white">
      <p className="text-[24px] font-bold">Travel</p>
      <div className="flex border font-semibold rounded-3xl  px-2 border-white ">
        <div className="py-4 px-5 cursor-pointer">
          <p>About</p>
        </div>
        <div className="py-4 px-5 cursor-pointer">
          <p>Trip</p>
        </div>
        <div className="py-4 px-5 cursor-pointer">
          <p>Blog</p>
        </div>
        <div className="py-4 px-5 cursor-pointer">
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
