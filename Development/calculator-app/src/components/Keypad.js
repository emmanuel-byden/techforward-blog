import React from 'react';

function Keypad({ onButtonClick }) {
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button 
          key={index} 
          onClick={() => onButtonClick(btn)}
          className={`btn ${btn === '=' ? 'equals' : ''} ${btn === 'C' ? 'clear' : ''}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
