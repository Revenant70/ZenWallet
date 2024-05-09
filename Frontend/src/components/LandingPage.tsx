import { useEffect, useState } from "react";

import womanAtBeachDark from "../assets/undraw_beach_day_cserdark.svg"

export default function LandingPage() {

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-around items-center">
        <div className=" h-5/6 w-full">
          <h2 className="font text-h5 text-dayTheme-text dark:text-nightTheme-text">
            ZenWallet
          </h2>
          <h1 className="pt-16 text-h2 text-dayTheme-text dark:text-nightTheme-text leading-16">
            Plan before you{" "}
            <span className="border-b-4 border-dayTheme-secondary  dark:border-nightTheme-secondary">
              spend
            </span>
          </h1>
          <button className="ml-2 mt-16 p-12 py-4 bg-dayTheme-text dark:bg-nightTheme-text text-p text-dayTheme-background dark:text-nightTheme-background rounded-xl">
            Get Started
          </button>
        </div>
        <img className=" absolute right-10 bottom-28 h-80" src={womanAtBeachDark} />
        <div className="w-full pb-6 justify-center items-center text-center">
          <p className="text-p text-dayTheme-text dark:text-nightTheme-text">
            Already have an account?{" "}
            <button>
              <span className=" border-b-4 border-dayTheme-secondary dark:border-nightTheme-secondary">
                Log in
              </span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
