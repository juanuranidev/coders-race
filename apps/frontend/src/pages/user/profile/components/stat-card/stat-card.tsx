import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "components/ui/card/card";
import React from "react";

interface Props {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function StatCard({ title, value, icon }: Props) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <h3>{title}</h3>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
