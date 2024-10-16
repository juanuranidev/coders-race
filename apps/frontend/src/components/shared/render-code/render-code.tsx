import Character from "components/shared/render-code/components/character/character";

interface Props {
  code: string;
  input: string;
}

export default function RenderCode({ code, input }: Props) {
  return (
    <div className="bg-gray-500 p-5 rounded-xl">
      <p className="text-white-500 text-lg font-semibold mb-5">
        Código a escribir
      </p>
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
