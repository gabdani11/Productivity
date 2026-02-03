import { useEffect, useState } from 'react';
import './time.scss';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours24 = time.getHours();
  const hours12 = hours24 % 12 || 12;
  const ampm = hours24 >= 12 ? "PM" : "AM";

  const pad = (num) => String(num).padStart(2, "0");

  return (
    <div className="container">
      <div className="time">
        <div className="hours">{pad(hours12)}</div>
        <span>:</span>
        <div className="minutes">{pad(time.getMinutes())}</div>
        <span>:</span>
        <div className="seconds">{pad(time.getSeconds())}</div>
        <div className="ampm">{ampm}</div>
      </div>
    </div>
  );
};

export default Time;
