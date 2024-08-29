import { useState, useEffect } from "react";

const useMillisecondCounter = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [milliseconds, setMilliseconds] = useState<number>(0);

  let interval: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
      }, 10);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }

    return () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };
  }, [isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  return {
    isRunning,
    stopCounter,
    startCounter,
    milliseconds,
  };
};

export default useMillisecondCounter;
