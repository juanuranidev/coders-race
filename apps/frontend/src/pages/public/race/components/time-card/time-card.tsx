import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "components/ui/card/card";
import { formatMillisecondsToSeconds } from "lib/utils/race/race.utils";

interface Props {
  milliseconds: number;
  text: string;
}

export default function TimeCard({ milliseconds, text }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{text} </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white-500 text-lg font-semibold">
          {milliseconds
            ? `${formatMillisecondsToSeconds(milliseconds)}s`
            : "0s"}
        </p>
      </CardContent>
    </Card>
  );
}
