import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

interface TimerProps {
  min: number;
  sec: number;
  onTimeout: () => void;
}

const Timer = ({ min, sec, onTimeout }: TimerProps) => {
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const time = useRef(180);
  let timerId: NodeJS.Timer;

  // timer
  useEffect(() => {
    timerId = setInterval(() => {
      setMinutes(time.current / 60);
      setSeconds(time.current & 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId);
  });

  // timeout
  useEffect(() => {
    if (time.current <= 0) {
      onTimeout();
      clearInterval(timerId);
    }
  });

  return (
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
