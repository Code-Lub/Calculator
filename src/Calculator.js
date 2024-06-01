// Calculator.js
import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  
  const handleButtonClick = (value) => {
    if (displayValue === '0' && value !== '.') {
      setDisplayValue(value);
    } else {
      setDisplayValue(prevValue => prevValue + value);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue} />
      <div className="buttons">
        <CalculatorButton label="9" onClick={() => handleButtonClick('9')} />
        <CalculatorButton label="8" onClick={() => handleButtonClick('8')} />
        <CalculatorButton label="7" onClick={() => handleButtonClick('7')} />
        <CalculatorButton label="6" onClick={() => handleButtonClick('6')} />
        <CalculatorButton label="5" onClick={() => handleButtonClick('5')} />
        <CalculatorButton label="4" onClick={() => handleButtonClick('4')} />    
        <CalculatorButton label="3" onClick={() => handleButtonClick('3')} />
        <CalculatorButton label="2" onClick={() => handleButtonClick('2')} />
        <CalculatorButton label="1" onClick={() => handleButtonClick('1')} />
        <CalculatorButton label="0" onClick={() => handleButtonClick('0')} />
        <CalculatorButton label="." onClick={() => handleButtonClick('.')} />
        <CalculatorButton label="/" onClick={() => handleButtonClick('/')} />
        <CalculatorButton label="+" onClick={() => handleButtonClick('+')} />
        <CalculatorButton label="-" onClick={() => handleButtonClick('-')} />
        <CalculatorButton label="*" onClick={() => handleButtonClick('*')} />
        <CalculatorButton label="=" onClick={calculateResult} />
        
       
      </div>
    </div>
  );
}

export default Calculator;
