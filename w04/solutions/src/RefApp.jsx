import { useRef, useState } from 'react';

function IncreaseDecreaseNumber({ value, onIncrease, onDecrease }) {
  return (
    <>
      <h2>{value}</h2>
      <button onClick={onIncrease}> + </button>&nbsp;&nbsp;
      <button onClick={onDecrease}> - </button>
    </>
  );
}

export default function RefApp() {
  const [number, setNumber] = useState(0);
  const txtNumber = useRef(null);

  const handleIncrease = () => setNumber(number + 1);

  const handleDecrease = () => setNumber(number - 1);

  const handleCopy = () => setNumber(txtNumber.current.value);

  return (
    <>
      <IncreaseDecreaseNumber
        value={number}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease} />

      <div>
        <input type='number' ref={txtNumber} placeholder='0' />
        <button onClick={handleCopy}>Copy</button>
      </div>
    </>
  )
}
