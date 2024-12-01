import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/main-travel-background.svg')",
      }}
    >
      <NavBar />
    </div>
  );
}

export default Hero;
