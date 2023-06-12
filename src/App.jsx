import { useState } from "react";

import "./App.css";

function AgeCalculator() {
  //useState to update the year, month,day and age.

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState("");

  //an arrow function
  const handleAgeCalculate = () => {
    const currentYear = new Date().getFullYear(); //getFullYear is a built-in function in JS and Date is a object.
    const currentMonth = new Date().getMonth() + 1; //getMonth is a built-in function in JS and Date is a object.
    // we add 1 in getMonth() because the index starts from 0, jan is at index 0.
    const currentDay = new Date().getDay(); //getDay is a built-in function in JS and Date is a object.
    let calcAge = currentYear - year; //calcAge will store the the age of a person.
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      calcAge--;
    }
    setAge(calcAge); //updates the Age state.
  };

  return (
    <>
    <div className="box flex flex-col justify-center items-center w-72 md:w-96 h-auto m-11  p-2 bg-purple-400 border-1 rounded-md shadow-lg shadow-purple-600">
      <h1 className="text-white text-lg font-semibold mb-4">Age Calculator</h1>
      <label htmlfor="month"> Month</label>
      <input className="input md:w-44 w-28 pl-2 rounded-md mb-2"
        type="number"
        id="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        placeholder="MM"
      ></input>
      <label htmlfor="day"> Day</label>
      <input className="input w-28 md:w-44 pl-2 rounded-md mb-2"
        type="number"
        id="day"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        placeholder="DD"
      ></input>
      <label htmlfor="year"> Year</label>
      <input className="input w-28 pl-2 md:w-44 rounded-md mb-2"
        type="number"
        id="year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="YYYY"
      ></input>
      <button type="button" className="button w-28 border-purple-600 border-1 rounded-xl p-1 text-center mt-6 mb-4 bg-purple-500 shadow-lg shadow-purple-600" onClick={handleAgeCalculate}> Calculate</button>
      <div className="box1 text-cyan-50 font-medium">Your age is: {age} years old. </div>
      </div>
      
    </>
  );
}

export default AgeCalculator;
