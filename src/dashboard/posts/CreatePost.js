import React from "react";
import { useState } from "react";
import "./createpost.css";
import { list_post } from "../../API/posting";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ user }) => {
  const navigate = useNavigate();
  const formDaata = {
    user_id: "",
    title: "yo",
    company_name: "",
    description: "",
    asking_price: 0,
    quantity_total: 0,
    date: new Date(),
  };

  const submitForm = (event) => {
    event.preventDefault();
    var todayDate = new Date();
    formDaata.date = todayDate;
    formDaata.user_id = user._id;
    list_post(formDaata);
    navigate("/");
  };
  const updateFormData = (value, field) => {
    formDaata[field] = value;
    console.log(user._id);
  };
  if (user) {
    return (
      <div className="max-w-[1440px] mx-auto text-center">
        <div id="post-form" className="my-5">
          <form className="grid grid-cols-1" onSubmit={(e) => submitForm(e)}>
            <label className="text-lg">
              Title:
              <input
                onChange={(e) => {
                  updateFormData(e.target.value, "title");
                }}
                className="border border-black rounded-md mx-1 p-1"
                size="40"
                type="text"
                name="title"
                id="title"
                required
              />
            </label>
            <label htmlFor="company" className="text-lg">
              Company Name:
              <input
                onChange={(e) => {
                  updateFormData(e.target.value, "company_name");
                }}
                className="border border-black rounded-md mx-1 p-1"
                size="40"
                type="text"
                name="company"
                id="company"
                required
              />
            </label>
            <label htmlFor="description" className="text-lg">
              Description:
              <input
                onChange={(e) => {
                  updateFormData(e.target.value, "description");
                }}
                className="border border-black rounded-md mx-1 p-1"
                size="40"
                type="text"
                name="description"
                id="description"
                required
              />
            </label>
            <label htmlFor="price" className="text-lg">
              Investment Asking Price $:
              <input
                onChange={(e) => {
                  updateFormData(e.target.value, "asking_price");
                }}
                className="border border-black rounded-md mx-1 p-1"
                size="40"
                type="number"
                name="price"
                id="price"
                min={1}
                required
                placeholder="How much money are you asking for?"
              />
            </label>
            <label htmlFor="percent" className="text-lg">
              For what percentage of your company?:
              <input
                onChange={(e) => {
                  updateFormData(e.target.value, "quantity_total");
                }}
                className="border border-black rounded-md mx-1 p-1"
                size="40"
                type="number"
                name="percent"
                min={0.01}
                id="percent"
                required
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  } else {
    return <div className="text-center text-lg">Please Log in to post</div>;
  }
};

export default CreatePost;
