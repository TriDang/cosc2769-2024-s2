import { useEffect, useState } from 'react';

export default function EffectApp() {
  return (
    <CountDown initialValue={10} />
  )
}

function CountDown({ initialValue }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (value > 0) {
      setTimeout(
        () => setValue(value - 1),
        1000
      );
    }
  }, [value]);

  return (
    <h1>Countdown: {value}</h1>
  )
}