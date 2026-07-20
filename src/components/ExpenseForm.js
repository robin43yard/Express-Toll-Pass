import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [date, setDate] = useState('');
  const [plaza, setPlaza] = useState('');
  const [amount, setAmount] = useState('');
  const [vehicle, setVehicle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!date || !plaza || !amount || !vehicle) return;

    onAddExpense({
      date,
      plaza,
      amount: parseFloat(amount),
      vehicle
    });

    setDate('');
    setPlaza('');
    setAmount('');
    setVehicle('');
  };

  return (
    <div className="form-card">
      <h3>Log New Toll Activity</h3>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Date of Transit</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Toll Plaza / Crossing Location</label>
          <input type="text" placeholder="e.g., Holland Tunnel" value={plaza} onChange={(e) => setPlaza(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Toll Fee Amount ($ USD)</label>
          <input type="number" step="0.01" min="0" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Assigned Vehicle / Transponder Label</label>
          <input type="text" placeholder="e.g., Fleet Truck #4" value={vehicle} onChange={(e) => setVehicle(e.target.value)} required />
        </div>
        <button type="submit" className="btn-submit">Save Toll Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
