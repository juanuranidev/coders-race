import { useState, useEffect } from "react";

interface UseCPSCounterProps {
  milliseconds: number;
  inputValue: string;
  codeText: string;
}

interface UseCPSCounterReturn {
  cps: number;
}

const useCPSCounter = ({
  milliseconds,
  inputValue,
  codeText,
}: UseCPSCounterProps): UseCPSCounterReturn => {
  const [cps, setCps] = useState<number>(0.0);

  const handleCalculateCps = (): void => {
    if (codeText.length === inputValue.length) {
      return;
    }

    if (milliseconds <= 0 || inputValue.length <= 0) {
      setCps(0.0);
      return;
    }

    const charactersTyped: number = inputValue.length;
    const timeInSeconds: number = milliseconds / 1000;
    const calculatedCps: number = charactersTyped / timeInSeconds;
    setCps(Number(calculatedCps.toFixed(2)));
  };

  useEffect(() => {
    handleCalculateCps();
  }, [milliseconds, inputValue]);

  return { cps };
};

export default useCPSCounter;
