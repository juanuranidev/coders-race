import React from "react";
import { formatMillisecondsToSeconds } from "lib/utils";
import { Card } from "@nextui-org/react";

type Props = {
  milliseconds: number;
};

export default function TimeCard({ milliseconds }: Props) {
  return (
    <Card
      className="bg-backgroundSecondary p-4 h-full"
      style={{
        zIndex: "auto",
        overflow: "visible",
      }}
    >
      <p className="font-semibold text-secondary text-lg">Tiempo</p>
      <p className="font-semibold text-secondary text-lg">
        {milliseconds ? formatMillisecondsToSeconds(milliseconds) : "0"}
      </p>
    </Card>
  );
}
