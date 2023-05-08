import React, { useState } from 'react';

interface TimerProps {
  min: number;
  sec: number;
}

const Timer = ({ min, sec }: TimerProps) => {
  const [minute, setMinute] = useState(min);
  const [second, setSecond] = useState(sec);
  return <div></div>;
};

export default Timer;
