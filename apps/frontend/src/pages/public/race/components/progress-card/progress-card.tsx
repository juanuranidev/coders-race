import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "components/ui/card/card";

interface Props {
  code: string;
  inputValue: string;
}

export default function ProgressCard({ code, inputValue }: Props) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Progreso</CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <div
          role="progressbar"
          className="w-full h-2 bg-white-500 rounded-full overflow-hidden"
        >
          <div
            style={{ width: `${(inputValue?.length * 100) / code?.length!}%` }}
            className="h-2 bg-purple-500 rounded-xl transition-all duration-300 ease-in-out"
          />
        </div>
      </CardContent>
    </Card>
  );
}
