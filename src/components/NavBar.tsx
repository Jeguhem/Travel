import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between text-white">
      <p className="text-[24px] font-bold">Travel</p>
      <div className="flex border rounded-[40px] border-white ">
        <div className="py-4 px-[30px]">
          <p>About</p>
        </div>
        <div className="py-4 px-[30px]">
          <p>Trip</p>
        </div>
        <div className="py-4 px-[30px]">
          <p>Blog</p>
        </div>
        <div className="py-4 px-[30px]">
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
