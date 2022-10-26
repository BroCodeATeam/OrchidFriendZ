import React from "react";

import LogoText from '../assets/logo-text.png'

export default function Home() {
  return (
    <div className={`bg-accent3 bg-contain bg-repeat-round bg-left w-screen h-screen text-white`} >
      <div className={`bg-white/70 w-full h-screen flex items-center flex-col`} >
        <div className={`flex justify-center items-center bg-white/70 w-[750px] h-auto`} >
          <img
            src={LogoText}
            alt=''
            className={`mt-10`}
          />
        </div>
        <div className={`flex justify-center content-center flex-col px-10 bg-white/70 w-[750px] h-[400px]`} >
          <p className={`text-black text-xl text-center w-fit font-bold uppercase`} >
            A social app conglomerate for Orchid Growers to share their Bloomers
            and tips for growing!
          </p>
          <br />
          <p className={`text-black text-xl text-center w-fit font-bold uppercase`} >
            Our end goal is to create a unified place for not only<br />
            Orchid Societies to share their galleries,
            <br />
            but for the non-society members to get the joy
            <br />
            of the app as well!
          </p>
        </div>
      </div>
    </div>
  );
}
