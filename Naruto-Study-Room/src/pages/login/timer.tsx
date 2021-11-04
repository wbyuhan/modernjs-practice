import React, { useState } from 'react';
import { Statistic } from '@arco-design/web-react';

function Timer() {
  const [timer, setTimer] = useState(new Date().getTime());
  setInterval(() => {
    setTimer(new Date().getTime());
  }, 100);

  return <Statistic title="CreatedTime" value={timer} format="YYYY-MM-DD HH:mm:ss" />;
}

export default Timer;
