import React, { useEffect, useState } from "react";
import { landingCodes } from "lib/utils";
import { RenderCode } from "components";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import BackgroundCode from "views/landing/components/BackgroundCode";

export default function Landing() {
  const landingCode = `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n},`;

  const [inputValue, setInputValue] = useState<string>("");

  const handleCompleteInput = (code: string) => {
    const nextInputIndex = inputValue.length;
    const nextInputCharacter = code[nextInputIndex];

    setInputValue(inputValue + nextInputCharacter);

    if (nextInputIndex === code.length) {
      setInputValue("");
    }
  };

  useEffect(() => {
    setTimeout(() => handleCompleteInput(landingCode), 1000);
  }, [inputValue]);

  return (
    <div>
      <div className="overflow-hidden" style={{ height: "85vh" }}>
        {landingCodes.map((code: any) => (
          <BackgroundCode key={code.text} code={code} />
        ))}
      </div>
      <div className="container mx-auto px-5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start ">
            <h1 className="text-4xl text-primary mb-2 font-bold text-6xl">
              Coders Race
            </h1>
            <p className="text-md font-semibold mb-5">
              ¿Qué tan rápido puedes codear?
            </p>
            <Link href="/play">
              <Button color="primary" className="font-semibold" radius="sm">
                Comenzar
              </Button>
            </Link>
          </div>
          <RenderCode code={landingCode} input={inputValue} />
        </div>
      </div>
    </div>
  );
}
