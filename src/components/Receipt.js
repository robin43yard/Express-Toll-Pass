import React from 'react';
import './Receipt.css';

function Receipt({ expenses }) {
  const totalAmount = expenses.reduce((sum, current) => sum + current.amount, 0);

  return (
    <div className="receipt-card">
      <div className="receipt-header">
        <h2>Express Toll Pass Expenditure Statement</h2>
        <p>Generated Audit Record for Tax Deductions & Fleet Reimbursements</p>
      </div>

      <table className="receipt-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Location / Crossing</th>
            <th>Vehicle Asset</th>
            <th style={{ textAlign: 'right' }}>Charge</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', color: '#64748b' }}>No toll data compiled in statement.</td>
            </tr>
          ) : (
            expenses.map((exp) => (
              <tr key={exp.id}>
                <td>{exp.date}</td>
                <td>{exp.plaza}</td>
                <td>{exp.vehicle}</td>
                <td style={{ textAlign: 'right' }}>${exp.amount.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="receipt-summary">
        <div className="summary-box">
          <div className="summary-row">
            <span>Itemized Crossings:</span>
            <span>{expenses.length}</span>
          </div>
          <div className="summary-row total-row">
            <span>Aggregate Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
