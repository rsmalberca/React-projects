import Expenses from "./Components/Expenses";
// Always make sure you are importing from the correct file, the correct folder, etc. Check, carefully, the names and the path.

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.72,
      date: new Date(2020, 7, 4),
    },
    { id: "e2", title: "New TV", amount: 799.99, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.75,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.65,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    // HTML code inside a JS file??? WDF?!!!
    //well, this is JSX : JavaScript XML. This is allowed because all the transformations that happen behind the scenes.
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

//the main difference of our ExpenseItem element with a normal HTML element is that it starts with a capital letter.
//Our element is a custom component (custom react component)!!!

export default App;
