// CalculatorButton.js
import React from 'react';

function CalculatorButton({ onClick, label }) {
  return (
    <button onClick={onClick}>{label}</button>
  );
}

export default CalculatorButton;
