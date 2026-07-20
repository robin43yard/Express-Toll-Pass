import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="list-card">
      <h3>Active Log History</h3>
      {expenses.length === 0 ? (
        <p className="no-data">No recorded toll activity found. Fill out the form to start tracking.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div className="item-details">
              <p className="item-plaza">{expense.plaza}</p>
              <p className="item-meta">{expense.date} • Tag: {expense.vehicle}</p>
            </div>
            <div className="item-right">
              <span className="item-amount">${expense.amount.toFixed(2)}</span>
              <button className="btn-delete" onClick={() => onDeleteExpense(expense.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
