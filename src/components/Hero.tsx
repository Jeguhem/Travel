import React from "react";
import NavBar from "./NavBar";
import chevrondown from "../../public/images/chevron-down.svg";
import Image from "next/image";
import search from "../../public/images/search.svg";

function Hero() {
  return (
    <div
      className="h-screen bg-cover  py-[40px] px-[80px] bg-center"
      style={{
        backgroundImage: "url('/images/main-travel-background.svg')",
      }}
    >
      <NavBar />
      <div className="flex flex-col items-center mt-[30px]">
        <div className="max-w-[1000px] text-center text-white">
          <h1>Explore Our Delightful World</h1>
        </div>
        <div className="mt-[20px] rounded-[50px] h-[58px] items-center bg-white flex gap-[60px] ">
          <div className="flex">
            <div className="flex px-[35px] py-1 gap-2">
              <p>Location</p> <Image src={chevrondown} alt="chevron down" />
            </div>
            <div className="flex px-[35px] py-1 border-x border-[#003C82] gap-2">
              <p>Date</p> <Image src={chevrondown} alt="chevron down" />
            </div>
            <div className="flex px-[35px] py-1 gap-2">
              <p>Guest</p> <Image src={chevrondown} alt="chevron down" />
            </div>
          </div>
          <div className="blue-bg rounded-full flex items-center justify-center w-[48px] mx-[5px] h-[48px]">
            <Image src={search} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
