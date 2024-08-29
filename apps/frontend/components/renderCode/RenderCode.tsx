import React from "react";
import { Card } from "@nextui-org/react";

type Props = {
  code: string;
  input: string;
};

export default function RenderCode({ code, input }: Props) {
  const renderText = (code: string, input: string): any => {
    return code.split("").map((character: string, index: number) => {
      const isSpace = character === "\n";
      const inputLength = input?.length - 1;
      const hasCompleted = input?.length > index;
      const expectedCharacter = inputLength === index - 1;

      if (expectedCharacter && !isSpace) {
        return (
          <span
            key={index}
            style={{
              opacity: "1",
              fontWeight: 500,
              fontSize: "1.2rem",
              backgroundColor: "#fc5d1b",
            }}
          >
            {character}
          </span>
        );
      } else if (expectedCharacter && isSpace) {
        return (
          <span
            key={index}
            style={{
              opacity: "1",
              fontWeight: 500,
              fontSize: "0.8rem",
              marginLeft: "0.5rem",
              backgroundColor: "#fc5d1b",
            }}
          >
            {/* <Kbd size="sm" p="0"> */}
            {"↵ \n"}
            {/* </Kbd> */}
          </span>
        );
      } else if (isSpace && !hasCompleted) {
        return (
          <span key={index} style={{ marginLeft: "0.5rem", opacity: "0.5" }}>
            {/* <Kbd size="sm" p="0"> */}
            {"↵ \n"}
            {/* </Kbd> */}
          </span>
        );
      } else if (isSpace && hasCompleted) {
        return (
          <span key={index} style={{ marginLeft: "0.5rem" }}>
            {/* <Kbd size="sm" p="0"> */}
            {"↵ \n"}
            {/* </Kbd> */}
          </span>
        );
      } else if (hasCompleted) {
        return (
          <span
            key={index}
            style={{
              opacity: "1",
              color: "white",
              fontWeight: 500,
              fontSize: "1.2rem",
            }}
          >
            {character}
          </span>
        );
      }
      return (
        <span
          key={index}
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            opacity: "0.5",
            color: "white",
          }}
        >
          {character}
        </span>
      );
    });
  };

  return (
    <Card className="bg-backgroundSecondary p-5">
      <pre style={{ fontFamily: "Poppins, sans-serif" }}>
        {renderText(code, input)}
      </pre>
    </Card>
  );
}
