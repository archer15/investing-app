import React, { useState } from "react";
import { fetch_specific_post } from "../../../API/posting";
import Invest from "./Invest";
const InvestmentHistory = ({ user, investmentList }) => {
  const [toggleInvest, setToggleInvest] = useState(false);
  const [selectedInvestPost, setSelectedInvestPost] = useState(null);

  const toggleAndSetPost = async (investment) => {
    setToggleInvest(!toggleInvest);
    let response = await fetch_specific_post(investment?.post_id);
    setSelectedInvestPost(response[0]);
  };

  return (
    <div className="max-w-[1440px] mx-auto  py-12 px-12 md:py-6 md:px-12 sm:py-4 sm:px-2">
      {investmentList.length > 0 ? (
        investmentList.map((investment, key) => {
          return (
            <div
              className="border-solid border-blue-400 border-2 py-12 px-4 my-10  space-y-4 rounded-md"
              key={key}
            >
              <div className="grid-cols-1 grid mx-10 text-center">
                <div className="flex-col flex space-y-2 ">
                  <span className="text-xl font-semibold">
                    {investment.company_name}
                  </span>
                  <p> Investment Amount: ${investment.investment_amount}</p>
                  <p>Business Ownership: {investment.investment_quantity}%</p>
                  <p> Investment Date: {investment.date}</p>
                </div>
                <button
                  onClick={() => toggleAndSetPost(investment)}
                  className="border  py-2 hover:bg-blue-800  bg-blue-600 rounded-lg text-white w-[50%] relative left-[25%]  "
                  disabled={user == null}
                >
                  Invest more
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>You Have no history </div>
      )}
      {toggleInvest ? (
        <Invest
          toggleInvest={setToggleInvest}
          post={selectedInvestPost}
          user={user}
        />
      ) : null}

      {/* {postList.map((item, index) =>  <p><p />)}  */}
    </div>
  );
};

export default InvestmentHistory;
