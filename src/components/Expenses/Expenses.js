import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenseItems.filter((expenseYear) => {
    return expenseYear.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>

        {/*Dynamically taking the item values using map() || "{}" used for dynamically rendering*/}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}{/**<- Using ternary operation to show the value if there's a content for a year else show no expenses found */}
        {/* {filteredExpenses.length === 0 &&  <p>No expenses found</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        } */}{/**<- Using && operator to show the value if there's a content for a year else show no expenses found */}
       <ExpensesList listedExpenses={filteredExpenses}/>{/**<-Calling the data content dynamically here by rendering the variable*/}

        {/*Hard Coded Expressions to render */}
        {/* <ExpenseItem
          title={props.expenseItems[0].title}
          amount={props.expenseItems[0].amount}
          date={props.expenseItems[0].date}
        />
        <ExpenseItem
          title={props.expenseItems[1].title}
          amount={props.expenseItems[1].amount}
          date={props.expenseItems[1].date}
        />
        <ExpenseItem
          title={props.expenseItems[2].title}
          amount={props.expenseItems[2].amount}
          date={props.expenseItems[2].date}
        />
        <ExpenseItem
          title={props.expenseItems[3].title}
          amount={props.expenseItems[3].amount}
          date={props.expenseItems[3].date}
        /> */}
      </Card>
    </div>
  );
}
export default Expenses;
