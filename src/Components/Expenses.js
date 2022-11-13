import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        name={props.items[0].title}
        qty={props.items[0].amount}
        expenseDate={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[1].title}
        qty={props.items[1].amount}
        expenseDate={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[2].title}
        qty={props.items[2].amount}
        expenseDate={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[3].title}
        qty={props.items[3].amount}
        expenseDate={props.items[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
