import React, { useEffect, useState } from "react";
import RenderCode from "components/shared/render-code/render-code";

type Props = {
  code: string;
  inputValue: string;
  onInput: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const calculateCodeCardHeight = (code: string): number => {
  const padding: number = 40;
  const lineHeight: number = 24;

  const lines: number = code.split("\n").length;
  const extraHeight: number = Math.ceil(code.length / 80) * 10;

  return lines * lineHeight + padding + extraHeight;
};

export default function CodeCard({ code, inputValue, onInput }: Props) {
  const [codeCardHeight, setCodeCardHeight] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const syntheticEvent = {
      key: e.target.value[e.target.value.length - 1] || "",
      currentTarget: e.currentTarget,
    } as React.KeyboardEvent<HTMLTextAreaElement>;
    onInput(syntheticEvent);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    setCodeCardHeight(calculateCodeCardHeight(code));
  }, [code]);

  return (
    <div
      className="rounded-lg relative"
      style={{ height: `${codeCardHeight}px` }}
    >
      <pre
        style={{ fontFamily: "Poppins, sans-serif", whiteSpace: "pre-wrap" }}
      >
        <RenderCode code={code} input={inputValue} />
      </pre>
      <textarea
        autoFocus
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="absolute top-0 left-0 w-full opacity-0 cursor-text resize-none"
        style={{
          height: `${codeCardHeight}px`,
          outline: "none",
        }}
      />
    </div>
  );
}
