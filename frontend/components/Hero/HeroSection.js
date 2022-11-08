import React from "react";
import Button from "../Button/Button";

function HeroSection({ heading, message }) {
  return (
    <div className='flex items-center justify-center h-full mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='p-5 z-[2] mt-[-10rem]'>
        <h1 class='font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-purple-900 to-teal'>
          {heading}
        </h1>
        <p className='py-5 text-2xl text-teal flex justify-center'>{message}</p>
        {/*TODO: I can't get this button to center and idk where the bg colors are coming from*/}
        <Button buttonStyle='square' text='Look Ma, Im a button' />
      </div>
    </div>
  );
}

export default HeroSection;
