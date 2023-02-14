import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { PaystackButton } from "react-paystack";
import Header from "../Components/Header";
import Decription from "../Components/Decription";
import { verifyTransaction } from "./verify";
import axios from "axios";
import { toast } from "react-toastify";

const Payment = () => {
  const publicKey = "pk_test_d963fe0bc6fb66484f044ec3dd2004af5a8c9304";
  const secretKey = "sk_test_fd0b8f410f1cab062ba78c47b366ff4f5a09c3b3";
  const amount = 2500000; // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ref, setReference] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      alert(
        "Thanks for doing business with us! Come back soon!! - - " +
          "Transaction Reference: " +
          response.reference
      );
      setReference(() => response.reference);
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  useEffect(() => {
    if (ref) {
      verifyTransaction(axios, secretKey, ref).then((response) =>
        toast.success(response.data.message, { position: "top-center" })
      );
    }
  }, [ref]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src="https://images.unsplash.com/photo-1673201896926-98b5892ce20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTA1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=50"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title">Foldable Wooden Chair</p>
            <p className="item-details__amount">NGN{amount / 100}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <form>
              <div className="checkout-field">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="checkout-field">
                <label>Phone</label>
                <input
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </form>
            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
        </div>
      </div>
      <Decription
        text={"Form integrated with"}
        linkURL={
          "https://paystack.com/docs/guides/accept_payments_on_your_react_app"
        }
        target={"_blank"}
        linkText={"Popup method"}
      />
    </div>
  );
};

export default Payment;
