import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

function ExpensesList(props){
    if(props.listedExpenses.length===0){
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
    }
   //<- Using if condition to show the value if there's a content for a year else show no expenses found 

    return(
        <ul className="expenses-list">
{props.listedExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
        </ul>
    );
}
export default ExpensesList;