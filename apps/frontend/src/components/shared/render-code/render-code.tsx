import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "components/ui/card/card";
import Character from "components/shared/render-code/components/character/character";

interface Props {
  code: string;
  input: string;
}

export default function RenderCode({ code, input }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Código a escribir</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
