import React from "react";
import GirlImg from "public/img.png";
import Image from "next/image";

const HeroImg = () => {
  return (
    <div className="relative h-screen ">
      <div className="absolute inset-0 -z-10">
        <Image
          src={GirlImg}
          fill
          alt="GirlImg"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950" />
      </div>
      <div className="flex items-center justify-center pt-14">
        <h1 className="font-bold text-5xl text-white font-style: italic">
          Aesthetic Girl
        </h1>
      </div>
    </div>
  );
};

export default HeroImg;
