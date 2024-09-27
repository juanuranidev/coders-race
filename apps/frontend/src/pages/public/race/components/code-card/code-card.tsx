import React, { useEffect, useState } from "react";
import RenderCode from "components/shared/render-code/render-code";

type Props = {
  code: string;
  inputValue: string;
  onInput: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const calculateCodeCardHeight = (code: string): number => {
  const lineHeight = 24;
  const padding = 40;
  const lines = code.split("\n").length;
  const extraHeight = Math.ceil(code.length / 80) * 10;
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
        className="absolute top-0 left-0 w-full opacity-0 cursor-text resize-none"
        style={{
          height: `${codeCardHeight}px`,
          outline: "none",
        }}
      />
    </div>
  );
}