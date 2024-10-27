interface BackgroundCodeProps {
  code: {
    text: string;
    justify: string;
  };
}

export default function BackgroundCode({ code }: BackgroundCodeProps) {
  const letters = code.text.split("");

  return (
    <div
      className="flex overflow-hidden"
      style={{ justifyContent: code.justify, maxWidth: "100%" }}
    >
      {letters.map((letter: string, i: number) => (
        <span
          key={i}
          className="text-white-500 font-semibold select-none whitespace-nowrap opacity-5"
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
