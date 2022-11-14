import React from "react";
import { useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai/";
import { invest_in_stock_post } from "../../../API/posting";

const Invest = ({ toggleInvest, post, user }) => {
  const [ownershipAmount, setOwnershipAmount] = useState(0);
  const ownerShipInput = useRef();
  let investment = {
    post_id: post._id,
    user_id: user._id,
    investment_amount: 0,
    investment_quantity: 0,
  };
  const calculateOwnership = (e) => {
    let ans =
      ((e.target.value / post.asking_price) * 100) / post.quantity_remaining;

    if (ans > post.quantity_remaining) {
      console.log("Can't buy more");
    }

    setOwnershipAmount(ans);
    console.log(e.target.value);
  };

  const buyInvestment = (e) => {
    e.preventDefault();
    
    investment.investment_quantity = ownershipAmount;
    investment.investment_amount = ownerShipInput.current.value;

    invest_in_stock_post(investment);
  };

  return (
    <div>
      <div
        onClick={() => {
          toggleInvest(false);
        }}
        className="h-full w-full bg-black/50 top-0 left-0 fixed "
      >
        <AiOutlineClose className="fixed z-10 top-4 right-6 hover:cursor-pointer hover:text-black text-white scale-125" />
      </div>
      <div className="w-1/2 h-1/2 mx-auto z-10 fixed top-[25%] left-[25%] bg-white">
        <div className="border-solid  py-5 px-4 my-10  space-y-4 rounded-md">
          <div className="text-center text-2xl font-medium  ">
            {post.company_name}
          </div>
          <div className="grid-cols-1 md:grid-cols-2 grid mx-10 ">
            <div className="flex-col flex space-y-2 ">
              <span className="text-xl font-semibold">{post.title}</span>
              <p>Description: {post.description}</p>
              <span>{post.date}</span>
            </div>
            <div className="md:text-right space-y-2">
              <div className="">Asking price: ${post.asking_price}</div>
              <p>Total: {post.quantity_total}</p>
              <div>Remaining available: {post.quantity_remaining}</div>
            </div>
          </div>
          <div className="relative text-center flex justify-center items-center">
            <div
              className={` py-2 px-4 rounded-md text-white ${
                post.status === "active" ? "bg-green-500" : "bg-red-600"
              }`}
            >
              {post.status}
            </div>
          </div>
          <form onSubmit={(e) => buyInvestment(e)} className="px-8">
            <p>Asking price: {post.asking_price}</p>
            <p>Stock percentage remaining: {post.quantity_remaining}%</p>
            <p>
              Cost per share: ${post.asking_price / post.quantity_remaining}
            </p>
            <label htmlFor="">Investment amount ($): </label>
            <input
              ref={ownerShipInput}
              onChange={(e) => calculateOwnership(e)}
              className="border px-1"
              type="number"
              min={0}
              max={post.asking_price}
              required
            />
            <p>Ownership Amount: {ownershipAmount}%</p>
            <p>
              Remaining Amount: {post.quantity_remaining - ownershipAmount}%
            </p>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Invest;
