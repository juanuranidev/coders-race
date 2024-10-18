import Character from "components/shared/render-code/components/character/character";
import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
} from "components/ui/card/card";

interface Props {
  code: string;
  input: string;
}

export default function RenderCode({ code, input }: Props) {
  return (
    // <div className="bg-black-500 p-5 rounded-xl border-2 border-purple-500">
    //   <p className="text-white-500 text-lg font-semibold mb-5">
    //     Código a escribir
    //   </p>
    //   <pre className="font-medium">
    //     {code.split("").map((character: string, index: number) => (
    //       <Character
    //         key={index}
    //         index={index}
    //         input={input}
    //         character={character}
    //       />
    //     ))}
    //   </pre>
    // </div>
    <Card>
      <CardHeader>
        <CardTitle>Código a escribir</CardTitle>
      </CardHeader>
      <CardContent>
        {/* <div className="bg-black-500 p-5 rounded-xl border-2 border-purple-500"> */}
        {/* <p className="text-white-500 text-lg font-semibold mb-5">
            Código a escribir
          </p> */}
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
        {/* </div> */}
      </CardContent>
    </Card>
  );
}
