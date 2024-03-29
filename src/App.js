import logo from './logo.svg';
import './App.css';
import Expense from './Components/Expense/Expense';
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <ExpenseComponent />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addingNewExpenseHandler = (data) => {
    // const newData = {
    //   ...data,
    // };
    // console.log(newData);
    setExpenses(prevExpense => {
      return [...prevExpense, data]
    });
  };

  return (
    <div>
      <h1>Himalaya's Expense Tracker</h1>
      <NewExpense onAddingNewExpense={addingNewExpenseHandler}/>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
