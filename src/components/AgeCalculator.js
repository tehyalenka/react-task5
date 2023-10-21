//REACT TASK-5

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AgeCalculator = () => {
  const [dob, setDob] = useState(null);
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const ageDiff = today - birthDate;
      const calculatedAge = Math.floor(
        ageDiff / (1000 * 60 * 60 * 24 * 365.25)
      );
      setAge(calculatedAge);
    }
  };

  return (
    <div
      className="container"
      style={{ margin: "50px auto", textAlign: "center" }}
    >
      <h1 style={{}}>Age Calculator</h1>
      <h5 className="my-3">Enter your date of birth</h5>
      <DatePicker
        selected={dob}
        onChange={(date) => setDob(date)}
        dateFormat="dd-MM-yyyy"
      />
      <br />
      <button className="btn btn-primary my-3 btn-lg" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && <h4>Your are {age} years old</h4>}
    </div>
  );
};

export default AgeCalculator;
