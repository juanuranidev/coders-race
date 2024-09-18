import Character from "components/shared/renderCode/components/character/character";

interface Props {
  code: string;
  input: string;
}

export default function RenderCode({ code, input }: Props) {
  return (
    <div className="bg-background-gray p-5 rounded-2xl">
      <pre className="font-medium">
        {code.split("").map((character: string, index: number) => (
          <Character
            key={index}
            index={index}
            input={input}
            character={character}
          />
        ))}
      </pre>
    </div>
  );
}
