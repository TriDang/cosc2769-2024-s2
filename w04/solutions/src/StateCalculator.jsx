import { useState } from 'react';
import Button from './Button.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function Calculator() {
  const [calcState, setCalcState] = useState({ prevNumber: 0, currentNumber: 0, operator: '+' });

  const calcButtons = [
    [  // first row
      { cols: 1, value: 7, type: 'digit' },
      { cols: 1, value: 8, type: 'digit' },
      { cols: 1, value: 9, type: 'digit' },
      { cols: 1, value: '/', type: 'operator' },
    ],
    [  // second row
      { cols: 1, value: 4, type: 'digit' },
      { cols: 1, value: 5, type: 'digit' },
      { cols: 1, value: 6, type: 'digit' },
      { cols: 1, value: '*', type: 'operator' },
    ],
    [  // third row
      { cols: 1, value: 1, type: 'digit' },
      { cols: 1, value: 2, type: 'digit' },
      { cols: 1, value: 3, type: 'digit' },
      { cols: 1, value: '-', type: 'operator' },
    ],
    [  // last row
      { cols: 1, value: 0, type: 'digit' },
      { cols: 2, value: '=', type: 'result' },
      { cols: 1, value: '+', type: 'operator' },
    ]
  ];

  function handleClick(type, value) {
    switch (type) {
      case 'digit':
        // update current
        const newValue = calcState.currentNumber * 10 + value;
        setCalcState({ ...calcState, currentNumber: newValue });
        break;
      case 'operator':
        // set current as prev, set zero to current, save operator
        setCalcState({ prevNumber: calcState.currentNumber, currentNumber: 0, operator: value });
        break;
      case 'result':
        // apply operation, set result as current, set current as previous
        const res = eval(`${calcState.prevNumber} ${calcState.operator} ${calcState.currentNumber}`);
        const newState = { ...calcState, prevNumber: calcState.currentNumber, currentNumber: res };
        setCalcState(newState);
    }
  }

  const buttons = calcButtons.map((row) => {
    const rowButtons = row.map((btn) =>
      <Button key={btn.value} cols={btn.cols} type={btn.type} value={btn.value} onClick={handleClick} />
    );
    return (
      <div className="row">
        {rowButtons}
      </div>
    );
  });

  return (
    <div className="App">
      <h1>
        Calculator
      </h1>
      <div className='container'>
        {/* Result row */}
        <div className='row'>
          <div className='col'>
            <input type='text' readOnly={true} value={calcState.currentNumber} />
          </div>
        </div>
        {buttons}
      </div>
    </div>
  );
}
