import ExpenseItem from "./Components/ExpenseItem";
// Always make sure you are importing from the correct file, the correct folder, etc. Check, carefully, the names and the path.

function App() {
  return (
    // HTML code inside a JS file??? WDF?!!!
    //well, this is JSX : JavaScript XML. This is allowed because all the transformations that happen behind the scenes.
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

//the main difference of our ExpenseItem element with a normal HTML element is that it starts with a capital letter.
//Our element is a custom component (custom react component)!!!

export default App;
