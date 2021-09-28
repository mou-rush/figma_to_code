import React from "react";
import illustration from "../assets/Group_606.svg";
import "./homepage.css";

function Homepage() {
  return (
    <div>
      <div className="container">
        <div>
          <h2 className="tag-line">
            Delight your customers, from wherever you are
          </h2>
          <p className="message">
            Marketing, sales and service software that helps your business grow
            without compromise. because "good for the business" should also mean
            "good for the customer"
          </p>
          <button className="btn-try-for-free">Try for free</button>
        </div>
        <div>
          <img src={illustration} className="illustrator" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
