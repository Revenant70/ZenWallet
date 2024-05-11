
interface RecentActivityProps {
    paymentName: string;
    paymentAmount: number;
    paymentDate: string;
  }
  
  const RecentActivityCard: React.FC<RecentActivityProps> = ({
    paymentName,
    paymentAmount,
    paymentDate,
  }) => { 
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-h5 text-dayTheme-text dark:text-nightTheme-text  ">{paymentName}</h3>
                    <p className="text-p text-dayTheme-text dark:text-nightTheme-text ">{paymentDate}</p>
                </div>
                <div>
                    <p className="text-p text-dayTheme-text dark:text-nightTheme-text ">
                        {paymentAmount}
                    </p>
                </div>
            </div>
        </>
    )
  }


export default RecentActivityCard