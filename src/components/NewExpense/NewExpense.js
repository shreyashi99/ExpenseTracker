import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEdit, setIsEdit]=useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };
  const startEditingHandler=()=>{
    setIsEdit(true);
  }
  const deleteEditingHandler=()=>{
    setIsEdit(false);
  }
  return (
    <div className="new-expense">
      {!isEdit && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={deleteEditingHandler} />}
    </div>
  );
}
export default NewExpense;
