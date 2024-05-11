import React from "react";

interface SubscriptionCardProps {
  companyIcon: string;
  paymentName: string;
  paymentAmount: number;
  nextPaymentDate: string;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  companyIcon,
  paymentName,
  paymentAmount,
  nextPaymentDate,
}) => {
  return (
    <div className=" bg-opacity-0 overflow-hidden h-max m-2 flex-none snap-center snap-always rounded-xl">
      <div className="p-4">
        <div className="flex items-center justify-around">
          <img
            src={companyIcon}
            alt="Company Icon"
            className="w-20 h-20 mr-4 rounded-full"
          />
          <div>
            <h2 className="text-xl pr-4 text-dayTheme-text dark:text-nightTheme-text">{paymentName}</h2>
            <p className="text-dayTheme-text dark:text-nightTheme-text text-sm">{nextPaymentDate}</p>
          </div>
          <p className="text-dayTheme-text dark:text-nightTheme-text">${paymentAmount.toFixed(2)}</p>
        </div>
        <div className="mt-2"></div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
