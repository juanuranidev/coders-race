import { useState, useEffect, useRef } from "react";

interface UseMillisecondCounterReturn {
  isRunning: boolean;
  milliseconds: number;
  startCounter: () => void;
  stopCounter: () => void;
  resetCounter: () => void;
}

const useMillisecondCounter = (): UseMillisecondCounterReturn => {
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [milliseconds, setMilliseconds] = useState<number>(0);

  const updateMilliseconds = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed: number = timestamp - startTimeRef.current;
    setMilliseconds(elapsed);

    if (isRunning) {
      animationFrameRef.current = requestAnimationFrame(updateMilliseconds);
    }
  };

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = null;
      animationFrameRef.current = requestAnimationFrame(updateMilliseconds);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  const resetCounter = () => {
    setIsRunning(false);
    setMilliseconds(0);
    startTimeRef.current = null;
  };

  return {
    isRunning,
    milliseconds,
    startCounter,
    stopCounter,
    resetCounter,
  };
};

export default useMillisecondCounter;
