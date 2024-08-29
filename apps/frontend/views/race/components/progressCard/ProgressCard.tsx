import React from "react";
import { Progress, Card } from "@nextui-org/react";

type Props = {
  code: string;
  active: boolean;
  handlers: any;
  inputValue: string;
  setInputValue: any;
  milliseconds: number;
};

export default function ProgressCard({ code, inputValue }: Props) {
  return (
    <Card className="bg-backgroundSecondary p-4 pb-5 h-full">
      <p className="font-semibold text-secondary text-lg pb-4">Progreso</p>
      <Progress
        aria-label="Progreso"
        value={(inputValue?.length * 100) / code?.length!}
      />
    </Card>
  );
}
