import { formatMillisecondsToSeconds } from "lib/utils/race";

interface Props {
  milliseconds: number;
}

export default function TimeCard({ milliseconds }: Props) {
  return (
    <div className="bg-gray-500 p-5 h-full rounded-lg">
      <p className="text-white-400 text-lg font-semibold">Tiempo</p>
      <p className="text-white-400 text-lg font-semibold">
        {milliseconds ? `${formatMillisecondsToSeconds(milliseconds)}s` : "0s"}
      </p>
    </div>
  );
}
