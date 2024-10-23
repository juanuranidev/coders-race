import { Code } from "lib/interfaces/code/code.interfaces";
import CPSCard from "../cps-card/cps-card";
import TimeCard from "../time-card/time-card";
import CodeCard from "../code-card/code-card";
import Confetti from "react-confetti";
import { ButtonOutline } from "components/ui/button/button";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { H3, P } from "components/ui/typography/typography";

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
    <div className="w-full">
      <div className="mb-4 bg-black-500 py-2 rounded-xl flex justify-between items-center">
        <div>
          <H3>¡Felicidades!</H3>
          <P className="text-white-600 font-medium">
            Estas son las estadísticas de tu carrera
          </P>
        </div>
        <ButtonOutline onClick={() => navigate("/play")}>
          Volver a jugar
        </ButtonOutline>
      </div>
      <div className="grid grid-cols-12 gap-5 mb-5 w-full">
        <div className="col-span-2 flex flex-col gap-5">
          <CPSCard cps={cpm} text="CPS Final" />
          <TimeCard milliseconds={timeInMS} text="Tiempo Total" />
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
