import PrimaryButton from "components/ui/primary-button/primary-button";
import { Code } from "lib/interfaces/code/code.interfaces";
import { NavigateFunction, useNavigate } from "react-router-dom";
import TimeCard from "../time-card/time-card";
import CPSCard from "../cps-card/cps-card";
import CodeCard from "../code-card/code-card";
import Confetti from "react-confetti";

interface Props {
  cpm: number;
  code: Code | undefined;
  timeInMS: number;
  inputValue: string;
}

export default function RaceStatsView({
  cpm,
  code,
  timeInMS,
  inputValue,
}: Props) {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <p className="text-white-400 text-5xl font-semibold text-center">
        ¡Felicidades!
      </p>
      <p className="text-white-500 text-lg font-semibold text-center">
        Estos son las estadísticas de tu carrera
      </p>
      <div className="flex justify-end mb-5 w-full">
        <PrimaryButton
          onClick={() => navigate("/play")}
          text="Volver a jugar"
        />
      </div>
      <div className="grid grid-cols-12 gap-5 mb-5 w-full">
        <div className="col-span-2 flex flex-col gap-5">
          <CPSCard cps={cpm} text="CPS" />
          <TimeCard milliseconds={timeInMS} text="Tiempo total" />
        </div>
        <div className="col-span-10">
          <CodeCard
            onInput={() => {}}
            code={code?.text ?? ""}
            inputValue={inputValue}
          />
        </div>
      </div>
      <Confetti
        recycle={false}
        numberOfPieces={1500}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
