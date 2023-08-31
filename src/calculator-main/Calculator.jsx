import React, { useState } from 'react';
import "./calculator.scss";

const Calculator = () => {
  const [enteredNum, setEnteredNum] = useState('0'); 
  const [prevNum, setPrevNum] = useState(''); 
  const [operator, setOperator] = useState(''); 
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    if (result !== '' || enteredNum === '0') {
      setEnteredNum(number);
      setResult('');
    } else {
      setEnteredNum(enteredNum + number);
    }
    const clickSound = new Audio('/clicksound.mp3'); 
    clickSound.play(); 
  };

  const handleOperatorClick = (op) => {
    if (prevNum !== '') {
      calculateResult();
    }
    setPrevNum(enteredNum);
    setEnteredNum('');
    setOperator(op);
    const clickSound = new Audio('/clicksound.mp3'); 
    clickSound.play(); 
  };

  const calculateResult = () => {
    const num1 = parseFloat(prevNum);
    const num2 = parseFloat(enteredNum);

    if (operator === '+') {
      setResult((num1 + num2).toString());
    } else if (operator === '-') {
      setResult((num1 - num2).toString());
    } else if (operator === '*') {
      setResult((num1 * num2).toString());
    } else if (operator === '/') {
      setResult((num1 / num2).toString());
    }

    setPrevNum('');
    setOperator('');
  };

  const handleEqualClick = () => {
    if (prevNum !== '' && operator !== '') {
      calculateResult();
      setEnteredNum("0");
    }
    const clickSound = new Audio('/clicksound.mp3'); 
    clickSound.play(); 
  };

  const handleClearClick = () => {
    setEnteredNum('0');
    setPrevNum('');
    setOperator('');
    setResult('');
    const clickSound = new Audio('/clicksound.mp3'); 
    clickSound.play(); 
  };

  return (
    <div className="calc-first-box">
      <div className="calculator-box">
        <div className="result-screen">
          <span>
            {prevNum}
            {operator}
            {enteredNum}
          </span>
          <span>= {result}</span>
        </div>
        <div className="buttons">
          <div className="left">
            <div>
              <div className="btn" onClick={handleClearClick}>c</div>
              <div className="btn" onClick={handleEqualClick}>=</div>
              <div className="btn" onClick={() => handleOperatorClick('/')}>/</div>
            </div>
            <div >
              {[7, 8, 9].map(num => (
                <div className="btn" key={num} onClick={() => handleNumberClick(num.toString())}>{num}</div>
                
              ))}
            </div>
            <div>
              {[4, 5, 6].map(num => (
                <div className="btn" key={num} onClick={() => handleNumberClick(num.toString())}>{num}</div>
              ))}
            </div>
            <div>
              {[1, 2, 3].map(num => (
                <div className="btn" key={num} onClick={() => handleNumberClick(num.toString())}>{num}</div>
              ))}
            </div>
            <div>
              <div className="btn" onClick={() => handleNumberClick('0')}>0</div>
              <div className="btn" onClick={() => handleNumberClick('.')}>.</div>
            </div>
          </div>
          <div className="right">
            {['*', '-', '+'].map(op => (
              <div className='btn' key={op} onClick={() => handleOperatorClick(op)}>{op}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
