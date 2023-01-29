const runSetCount = (count: number, setCount: (count: number) => void) => {
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);
};

const makeTimer = (count: number, format: string) => {
  const hour = turnToTime(Math.floor(count / 3600));
  const min = turnToTime(Math.floor(count / 60));
  const sec = turnToTime(count);
  if (format === 'h:m:s') {
    return `${hour}:${min}:${sec}`;
  }
  if (format === 'm:s') {
    return `${min}:${sec}`;
  }
};

export { runSetCount, makeTimer };

const convertToMinWhenExceeding60Secs = (timeInSecs: number) => {
  if (timeInSecs % 60 < 10) {
    return renderOneDigitSec(timeInSecs);
  }
  return timeInSecs % 60;
};

const renderOneDigitSec = (timeInSecs: number) => {
  return '0' + (timeInSecs % 60);
};

const turnToTime = (timeInSecs: number) => {
  if (timeInSecs >= 60) {
    return convertToMinWhenExceeding60Secs(timeInSecs);
  }
  if (timeInSecs % 60 < 10) {
    return renderOneDigitSec(timeInSecs);
  }
  return timeInSecs;
};
