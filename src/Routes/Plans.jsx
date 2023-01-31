import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";

const Plans = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [interval, setIInterval] = useState("");
  const secretKey = "sk_test_fd0b8f410f1cab062ba78c47b366ff4f5a09c3b3";

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    try {
      if (response.data.status === true) {
        toast.success("Plan Successfully Created", { position: "top-center" });
        event.target.reset();
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
            <select
              id="interval"
              required
              onChange={(e) => setIInterval(e.target.value)}
            >
              <option value="" disabled selected>
                Select Interval
              </option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="biannually">Bi-annually</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <button type="submit">Create Plan</button>
        </form>
      </div>
    </div>
  );
};

export default Plans;
