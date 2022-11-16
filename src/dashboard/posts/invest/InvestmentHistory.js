import React from 'react'

const InvestmentHistory = ({user, investmentList}) => {
  console.log("history," , investmentList)
  return (
    <div className="max-w-[1440px] mx-auto  py-12 px-12 md:py-6 md:px-12 sm:py-4 sm:px-2">
      
        
      {investmentList.length > 0 ? (
        investmentList.map((investment, key) => {
          return (
            <div
              className="border-solid border-blue-400 border-2 py-12 px-4 my-10  space-y-4 rounded-md"
              key={key}>
                <div className="grid-cols-2 grid mx-10 ">
                <div className="flex-col flex space-y-2 ">
                  <span className="text-xl font-semibold">{investment.company_name}</span>
                  <p> ${investment.investment_amount}</p>
                  <p>Business Ownership: {investment.investment_quantity}%</p>
                </div>
                <div className="text-right space-y-2">
                {investment.date}
                </div>

              </div>
        
              

              
            </div>
          );
        })
      ) : (
        <div>You Have no history </div>
      )}

      
      
      {/* {postList.map((item, index) =>  <p><p />)}  */}
    </div>
  );
}

export default InvestmentHistory