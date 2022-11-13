import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
//with this we bring all the CSS file into our JS file.

function ExpenseItem(props) {
  return (
    // It is important to have ONLY one root element for component, in this case the main div.
    //This is JSX code, this format (the type of code).

    //So the key you access on your PROPS object has to be the name you picked for your attribute (prop) in the App.js file. In the <ExpenseItem> element.
    <div className="expense-item ">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.qty}</div>
      </div>
    </div>
  );
}

//When a component doesn't have content inside it like this: <ExpenseDate></ExpenseDate>, we can rewrite it just like this: <ExpenseDate />

export default ExpenseItem;
