import { useState } from "react";

interface UseCompleteInputProps {
  code: string;
}

interface UseCompleteInputReturn {
  inputValue: string;
  handleCompleteInput: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleAutoCompleteInput: () => void;
}

export function useCompleteInput({
  code,
}: UseCompleteInputProps): UseCompleteInputReturn {
  const [inputValue, setInputValue] = useState<string>("");

  const handleCompleteInput = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    const userInput: string = e.currentTarget.value;
    const nextChar: string = code.slice(0, userInput.length);
    const isDeleteKey: boolean = e.key === "Backspace" || e.key === "Delete";

    if (isDeleteKey) {
      console.log("Delete key");
      e.preventDefault();
      return;
    }

    if (userInput === code.slice(0, userInput.length)) {
      console.log("User input is correct");
      setInputValue(userInput);
    }

    if (e.key === "Enter" && nextChar === "\n") {
      console.log("Enter key");
      setInputValue(code.slice(0, userInput.length + 1));
    }
  };

  const handleAutoCompleteInput = (): void => {
    const canCompleteInput: boolean = inputValue.length < code.length;

    if (canCompleteInput) {
      const nextChar = code[inputValue.length];
      setInputValue((prevValue) => prevValue + nextChar);
    }
  };

  return { inputValue, handleCompleteInput, handleAutoCompleteInput };
}
