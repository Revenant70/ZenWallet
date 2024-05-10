import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import womanAtBeachDark from "../assets/undraw_beach_day_cserdark.svg"

export default function LandingPage() {

  const navigate = new useNavigate();

  const goTologin = () => {
    navigate("/login")
  }

  const goToSignup = () => {
    navigate("/signup")
  }

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-around items-center">
        <div className=" h-full w-full">
          <h2 className="font text-h5 text-dayTheme-text dark:text-nightTheme-text">
            ZenWallet
          </h2>
          <h1 className="pt-16 ml-0 md:text-h2 lg:text-h1 text-dayTheme-text dark:text-nightTheme-text leading-16 hidden md:block max-w-4xl md:ml-24 md:leading-snug">
            Welcome to ZenWallet: Your {" "}
            <span className="border-b-4 border-dayTheme-secondary  dark:border-nightTheme-secondary">
            Path
            </span>
             {" "}to Financial Harmony
          </h1>
          <p className="pt-3 hidden lg:block text-h5 ml-24 text-dayTheme-text dark:text-nightTheme-text max-w-xl">
            Unlock the secrets to financial peace. Experience clarity and balance in your finances with ZenWallet.
          </p>

          <h1 className="pt-16 text-h2 text-dayTheme-text dark:text-nightTheme-text leading-16 block md:hidden">
            Plan before you{" "}
            <span className="border-b-4 border-dayTheme-secondary  dark:border-nightTheme-secondary">
              spend
            </span>
          </h1>

         
          <button onClick={goToSignup} className="ml-2 md:ml-24 mt-16 p-12 py-4 bg-dayTheme-text dark:bg-nightTheme-text text-p text-dayTheme-background dark:text-nightTheme-background rounded-xl">
            Get Started
          </button>
        </div>
        <img className=" absolute right-10 bottom-28 h-80" src={womanAtBeachDark} />
        <div className="w-full pb-6 justify-center items-center text-center">
          <p className="text-p text-dayTheme-text dark:text-nightTheme-text">
            Already have an account?{" "}
            <button onClick={goTologin}>
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
