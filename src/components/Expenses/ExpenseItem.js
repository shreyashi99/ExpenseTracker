import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
// const [title, setTitle] = useState(props.title);
console.log("ExpenseItem is evaluated!");
  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.amount}</p>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
