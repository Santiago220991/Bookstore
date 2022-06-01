import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({ total: 0, next: null, operation: null });
  const numbers = ['AC', '+/-', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
  const numberbtn = [];
  const operators = ['÷', 'x', '-', '+', '='];
  const operatorsbtn = [];

  const onClickBtn = (event) => {
    const val = calculate(result, event.target.innerText);
    setResult(val);
  };

  numbers.forEach((element) => {
    if (element !== '0') {
      numberbtn.push(<li key={element}><button type="button" onClick={onClickBtn}>{element}</button></li>);
    } else {
      numberbtn.push(<li id="zero" key={element}><button type="button" onClick={onClickBtn}>{element}</button></li>);
    }
  });
  operators.forEach((element) => {
    operatorsbtn.push(<li key={element}><button type="button" onClick={onClickBtn}>{element}</button></li>);
  });

  return (
    <div className="calculator">
      <h1>Let&lsquo;s do some math!</h1>
      <div className="calculatordiv">
        <p className="display">
          {result.total}
          {' '}
          {result.operation}
          {' '}
          {result.next}
        </p>
        <ul className="numbers">
          {numberbtn}
        </ul>
        <ul className="operators">
          {operatorsbtn}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
