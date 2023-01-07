import React from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
    function addExpenseHandler(expense){
        console.log("app.js");
        console.log(expense);
    };

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses/>
    </div>
  );
}
export default App;
