import { formatMillisecondsToSeconds } from "lib/utils/race/race.utils";

interface Props {
  milliseconds: number;
  text: string;
}

export default function TimeCard({ milliseconds, text }: Props) {
  return (
    <div className="bg-gray-500 p-5 h-full rounded-lg">
      <p className="text-white-500 text-lg font-semibold">{text}</p>
      <p className="text-white-500 text-lg font-semibold">
        {milliseconds ? `${formatMillisecondsToSeconds(milliseconds)}s` : "0s"}
      </p>
    </div>
  );
}
