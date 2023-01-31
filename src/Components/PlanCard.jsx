import React from "react";
import "../App.css";

const PlanCard = (props) => {
  const { details } = props;

  const localDetails = JSON.parse(localStorage.getItem("planDetails")) || []

  return (
    <div className="cardWrapper">
      <div className="form-header">Plan Details</div>
      <div className="spanDetails">
        <p>Name </p>
        <p>{details ? details.name : localDetails[0]?.name}</p>
      </div>

      <div className="spanDetails">
        <p>Amount </p>
        <p>{details ? details.amount : localDetails[0]?.amount}</p>
      </div>

      <div className="spanDetails">
        <p>Interval </p>
        <p>{details ? details.interval : localDetails[0]?.interval}</p>
      </div>
    </div>
  );
};

export default PlanCard;
