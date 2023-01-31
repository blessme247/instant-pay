import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../Components/Header";
import Decription from "../Components/Decription";
import PlanCard from "../Components/PlanCard";

const Plans = () => {

  const [name, setName] = useState("");
  const [Oamount, setAmount] = useState("");
  const [interval, setIInterval] = useState("");

  const [details, setDetails] = useState()
  const secretKey = "sk_test_fd0b8f410f1cab062ba78c47b366ff4f5a09c3b3";

  const handleSubmit = async (event) => {
    event.preventDefault();
    let amount = Oamount * 100;
    try {
      const response = await axios.post(
        "https://api.paystack.co/plan",
        {
          name,
          amount,
          interval,
        },
        {
          headers: {
            Authorization: `Bearer ${secretKey}`,
            "content-type": "application/json",
          },
        }
      );
      if (response.data.status === true) {
        toast.success("Plan Successfully Created", { position: "top-center" });
        event.target.reset();
        const {data} = response.data;
        const planDetails = []
        planDetails.push({name: data.name})
        planDetails.push({amount: data.amount})
        planDetails.push({interval: data.interval})
        localStorage.setItem("planDetails", JSON.stringify(planDetails))
        setDetails({
          name: data.name,
          amount: data.amount,
          interval: data.interval
        })
      }
       
    } catch (error) {
      console.log(error.response, "error")
      if (error.response.data.status === false) {

        toast.error(error.response.data.message, {position: "top-center"});
      }
    }
  };

  return (
    <div>
        <Header />
        <div className="flexWrapper"> 
      <div className="checkout-form">
        <form onSubmit={handleSubmit}>
          <p className="form-header">Create Plan</p>
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              required
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Interval</label>
            <select className="select-field" defaultValue=""
              id="interval"
              
              onChange={(e) => setIInterval(e.target.value)}
            >
              <option value="" disabled  >
                Select Interval
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="biannually">Bi-annually</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <button className="submit-btn" type="submit">Create Plan</button>
        </form>
      </div>
      <PlanCard details={details} />
      </div>
      <Decription text={"Form integrated with"} linkURL={"https://paystack.com/docs/payments/subscriptions#create-a-plan"} target={"_blank"} linkText={"Plan Creation API"} />
    </div>
  );
};

export default Plans;
