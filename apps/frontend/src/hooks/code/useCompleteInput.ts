import { useState } from "react";

interface UseCompleteInputProps {
  code: string;
}

interface UseCompleteInputReturn {
  inputValue: string;
  handleCompleteInput: () => void;
}

export function useCompleteInput({
  code,
}: UseCompleteInputProps): UseCompleteInputReturn {
  const [inputValue, setInputValue] = useState<string>("");

  const handleCompleteInput = () => {
    const nextInputIndex: number = inputValue.length;
    const nextInputCharacter: string = code[nextInputIndex];

    if (nextInputCharacter) {
      setInputValue((prevInput: string) => prevInput + nextInputCharacter);
    }

    if (nextInputIndex + 1 === code.length) {
      setInputValue("");
    }
  };

  return { inputValue, handleCompleteInput };
}
