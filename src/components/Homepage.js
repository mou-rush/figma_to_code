import React from "react";
import illustration from "../assets/Group_606.svg";
import heroSection from "../assets/something-for-everyone.svg";
import "./homepage.css";
// import Card from "./Card";

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
      <div>
        <p className="something-for-everyone">Something for everyone</p>
      </div>
      <div className="heroSection">
        <img src={heroSection} />
      </div>
      <div>
        <h2 className="service">What is new at the service Now</h2>
        <p className="whats-new">
          Great teamwork requires more than just great tools for us our proven
          methods, guides excercises that help make your work place better, and
          happier.
        </p>
      </div>
      <div>{/* <Card /> */}</div>
    </div>
  );
}

export default Homepage;
