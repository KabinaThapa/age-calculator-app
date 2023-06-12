import { useState } from 'react'

import './App.css'

function AgeCalculator() {
  //useState to update the year, month,day and age.

    const[year, setYear]=useState('')
    const[month, setMonth]=useState('')
    const[day, setDay]=useState('')
    const[age, setAge]=useState('')

   //an arrow function
    const handleAgeCalculate=()=>{
      const currentYear=new Date().getFullYear()   //getFullYear is a built-in function in JS and Date is a object.
      const currentMonth=new Date().getMonth() +1; //getMonth is a built-in function in JS and Date is a object.
                                                   // we add 1 in getMonth() because the index starts from 0, jan is at index 0.
      const currentDay=new Date().getDay()         //getDay is a built-in function in JS and Date is a object.
      let calcAge=currentYear-year                 //calcAge will store the the age of a person.
      if(
        currentMonth<month ||currentMonth ===month && currentDay<day
      )
      {
      calcAge--
    }
      setAge(calcAge) //updates the Age state.
      }
  

  return (
    <>
     <label htmlfor="month">  Month</label>
     <input type="number" id="month" value={month} onChange={(e)=>setMonth(e.target.value)}placeholder='MM'></input>
     <label htmlfor="day">  Day</label>
     <input type="number" id="day" value={day} onChange={(e)=>setDay(e.target.value)}placeholder='DD'></input>
     <label htmlfor="year">  Year</label>
     <input type="number" id="year" value={year} onChange={(e)=>setYear(e.target.value)}placeholder='YYYY'></input>
    <button onClick={handleAgeCalculate}> calculate</button>
    <div>Your age is :{age}</div>
    </>
  )
}

export default AgeCalculator

