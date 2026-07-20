import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: '1', date: '2026-07-15', plaza: 'Lincoln Tunnel', amount: 16.00, vehicle: 'Corporate SUV' },
    { id: '2', date: '2026-07-18', plaza: 'George Washington Bridge', amount: 12.50, vehicle: 'Personal Sedan' }
  ]);

  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString()
    };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(exp => exp.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div>
          <ExpenseForm onAddExpense={addExpenseHandler} />
        </div>
        <div>
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpenseHandler} />
        </div>
        <div className="receipt-section">
          <Receipt expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
