import { faCreditCard, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SubscriptionCard from "./elements/SubscriptionCard";
import { useEffect, useState } from "react";

import icons from "../assets/testbrandicons/netflix-icon-icon-2048x2048-yj41gpvr.png"
import RecentActivityCard from "./elements/RecentActivityCard";

export default function Home() {

  useEffect(() => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (prefersDarkMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
  }, [])

    
  return (
    <>
      <div className="no-scrollbar w-screen h-screen bg-dayTheme-background dark:bg-nightTheme-background">
        <div className="flex snap-x snap-mandatory flex-nowrap overflow-x-auto md:hidden">
          <div className="h-56 w-72 m-2 flex-none snap-center snap-always rounded-xl bg-opacity-0 border-2 border-dayTheme-primary dark:border-nightTheme-primary "></div>
          <div className="h-56 w-72 m-2 flex-none snap-center snap-always rounded-xl bg-opacity-0 border-2 border-dayTheme-primary dark:border-nightTheme-primary "></div>
          <div className="h-56 w-72 m-2 flex-none snap-center snap-always rounded-xl bg-opacity-0 border-2 border-dayTheme-primary dark:border-nightTheme-primary "></div>
        </div>
        <div className="mt-2 flex flex-col justify-center items-center">
          <div className="w-5/6 mt-4 h-20 bg-dayTheme-primary dark:bg-nightTheme-primary rounded-xl flex flex-row justify-start items-center pl-5">
            <FontAwesomeIcon icon={faCreditCard} size="xl" />
            <p className="ml-2">Checking</p>
          </div>
          <div className="w-5/6 mt-4 h-20 bg-dayTheme-primary dark:bg-nightTheme-primary rounded-xl flex flex-row justify-start items-center pl-5">
            <FontAwesomeIcon icon={faCreditCard} size="xl" />
            <p className="ml-2">Checking</p>
          </div>
          <div className="w-5/6 mt-4 h-20 bg-dayTheme-primary dark:bg-nightTheme-primary rounded-xl flex flex-row justify-start items-center pl-5">
            <FontAwesomeIcon icon={faCreditCard} size="xl" />
            <p className="ml-2">Checking</p>
          </div>
        </div>
        <div className="mt-4 flex snap-x snap-mandatory flex-nowrap overflow-x-auto md:hidden">
            <SubscriptionCard companyIcon={icons} paymentName="Netflix Premium" paymentAmount={2102} nextPaymentDate="Nov 5"/>
            <SubscriptionCard companyIcon={icons} paymentName="Netflix Premium" paymentAmount={2102} nextPaymentDate="Nov 5"/>
            <SubscriptionCard companyIcon={icons} paymentName="Netflix Premium" paymentAmount={2102} nextPaymentDate="Nov 5"/>
            <SubscriptionCard companyIcon={icons} paymentName="Netflix Premium" paymentAmount={2102} nextPaymentDate="Nov 5"/>
            <SubscriptionCard companyIcon={icons} paymentName="Netflix Premium" paymentAmount={2102} nextPaymentDate="Nov 5"/>
            <SubscriptionCard companyIcon={icons} paymentName="Netflix Premium" paymentAmount={2102} nextPaymentDate="Nov 5"/>
        </div>
        <div className="mt-4 p-6">
            <h3 className="text-h3 text-dayTheme-text dark:text-nightTheme-text">Recent Activity</h3>
            <RecentActivityCard paymentAmount={200} paymentName="Utilities" paymentDate="Nov 6" />
        </div>
      </div>
    </>
  );
}
