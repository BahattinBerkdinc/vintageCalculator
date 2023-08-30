import React from 'react'
import "./calculator.scss"

const Calculator = () => {
  return (
    <div className="calculator-box">
      <div className="result-screen">
        322332
      </div>
      <div className="buttons">
        <div className="left">
            <div>
                <div className="btn">c</div>
                <div className="btn">=</div>
                <div className="btn">/</div>
            </div>
            <div>
                <div className="btn">7</div>
                <div className="btn">8</div>
                <div className="btn">9</div>
            </div>
            <div>
                <div className="btn">4</div>
                <div className="btn">5</div>
                <div className="btn">6</div>
            </div>
            <div>
                <div className="btn">1</div>
                <div className="btn">2</div>
                <div className="btn">3</div>
            </div>
            <div>
                <div className="btn">0</div>
                <div className="btn">.</div>
            </div>
        </div>
        <div className="right">
            <div className='btn'>*</div>
            <div className='btn'>-</div>
            <div className='btn'>+</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
