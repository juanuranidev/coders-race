import React, { useEffect } from "react";
import { Card, Tooltip } from "@nextui-org/react";
import InfoIcon from "assets/icons/Info.svg";
import Image from "next/image";

type Props = {
  milliseconds: number;
  inputValue: string;
};

export default function CPM({ milliseconds, inputValue, cpm, setCpm }: any) {
  useEffect(() => {
    if (milliseconds > 0 && inputValue.length > 0) {
      // Calcular CPM usando la fórmula CPM = (caracteres / tiempo) * 60000
      const charactersTyped = inputValue.length;
      const timeInMinutes = milliseconds / 60000; // Convertir milisegundos a minutos
      const calculatedCpm = (charactersTyped / timeInMinutes).toFixed(0);
      setCpm(calculatedCpm);
    } else {
      setCpm("0");
    }
  }, [milliseconds, inputValue]);

  return (
    <Card
      className="bg-backgroundSecondary p-4 h-full"
      style={{
        zIndex: "auto",
        overflow: "visible",
      }}
    >
      <div className="flex flex-row gap-2 items-center">
        <p className="font-semibold text-secondary text-lg">CPM</p>
        <Tooltip
          color="secondary"
          content="Caracteres por minuto (CPM) se calculan de la siguiente forma: palabras correctas / tiempo en minutos"
        >
          <Image src={InfoIcon.src} width={25} height={25} alt="info icon" />
        </Tooltip>
      </div>
      <p className="font-semibold text-secondary text-lg">{cpm}</p>
    </Card>
  );
}
