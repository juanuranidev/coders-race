import React from "react";
import { Card, Textarea } from "@nextui-org/react";
import { useClickOutside } from "@mantine/hooks";
import { renderCodeCharacter } from "lib/utils";

type Props = {
  code: string;
  active: boolean;
  handlers: any;
  inputValue: string;
  setInputValue: any;
};

export default function RaceCard({
  code,
  active,
  handlers,
  inputValue,
  setInputValue,
}: Props) {
  const ref = useClickOutside(() => handlers.close());

  const handleChangeInput = (e: any) => {
    const input = e.target.value;
    const inputLength = inputValue?.length;

    if (code[inputLength] === input) {
      setInputValue(inputValue + e.target.value);
    }
  };
  return (
    <Card
      ref={ref}
      radius="lg"
      onClick={() => handlers.open()}
      className="bg-backgroundSecondary p-5"
      style={{ border: active ? "2px solid #fc5d1b" : "2px solid #ff0000" }}
    >
      <pre style={{ fontFamily: "Poppins, sans-serif" }}>
        {renderCodeCharacter(code, inputValue)}
      </pre>
      <Textarea
        autoFocus
        onClick={() => handlers.open()}
        minRows={12}
        value=""
        variant="bordered"
        className="absolute top-0 left-0 w-full h-full border-none focus:outline-0 border-none "
        style={{ border: "0px", outline: "0px" }}
        onChange={(e) => handleChangeInput(e)}
      />
    </Card>
  );
}
