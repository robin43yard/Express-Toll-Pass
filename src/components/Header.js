import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-title">
        <h1>Express Toll Pass</h1>
        <p>Centralized Ledger for Electronic Highway Charges & Toll Transponders</p>
        <span className="badge">v1.0.0 Stable</span>
      </div>
    </header>
  );
}

export default Header;
