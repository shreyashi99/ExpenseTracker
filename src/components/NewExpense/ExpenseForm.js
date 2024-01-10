import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  // Using multiple state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });//<-Used single state instead of multiple
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //<-Used while using multiple state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });// <- Used while using a single state as an alternative of multiple state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });//<- Used when you want to ensure that the previousstate to be there or the current state depends on the previous
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); // <-Used while using multiple state
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // }); // <- Used while using a single state as an alternative of multiple state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });//<- Used when you want to ensure that the previousstate to be there or the current state depends on the previous
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); // <-Used while using multiple state
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // }); // <- Used while using a single state as an alternative of multiple state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });//<- Used when you want to ensure that the previousstate to be there or the current state depends on the previous
  };

  //shared handler instead of using these three handlers
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };
 
const submitHandler=(event)=>{
  event.preventDefault();//The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

  const expenseData={
  title: enteredTitle,
  amount: +enteredAmount,
  date: new Date(enteredDate)
};
// console.log(expenseData);
props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
};

  return (
    <form onSubmit={submitHandler}> 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          {/* <input type="text" onChange={(event)=>inputChangeHandler('title', event.target.value)} /> */}
          {/*<- If we have used the shared handler*/}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
          {/* <input type="text" onChange={(event)=>inputChangeHandler('amount', event.target.value)} /> */}
          {/*<- If we have used the shared handler*/}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
          {/* <input type="text" onChange={(event)=>inputChangeHandler('date', event.target.value)} /> */}
          {/*<- If we have used the shared handler*/}
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
