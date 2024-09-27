import { useEffect } from "react";
import { useCompleteInput } from "hooks/code/useCompleteInput";
import useMillisecondCounter from "hooks/code/useMilisecondsCounter";
import useCPSCounter from "hooks/code/useCPSCounter";
import ProgressCard from "./components/progress-card/progress-card";
import TimeCard from "./components/time-card/time-card";
import CodeCard from "./components/code-card/code-card";
import {
  useNavigate,
  useParams,
  type NavigateFunction,
} from "react-router-dom";
import PrimaryButton from "components/ui/primary-button/primary-button";
import { useCodeReadRandomByLanguage } from "services/code/queries/code.queries";
import { useCreateRaceMutation } from "services/race/mutations/race.mutations";
import RaceStatsView from "./components/race-stats-view/race-stats-view";
import CPSCard from "./components/cps-card/cps-card";

export default function Race() {
  // Handle params and initial information
  const { language } = useParams();
  const navigate: NavigateFunction = useNavigate();

  const { data: code, isLoading } = useCodeReadRandomByLanguage(language ?? "");
  // Handle params and initial information

  // Handle race information
  const { milliseconds, startCounter, stopCounter } = useMillisecondCounter();
  const { inputValue, handleCompleteInput } = useCompleteInput({
    code: code?.text ?? "",
  });
  const { cps } = useCPSCounter({
    milliseconds,
    inputValue,
    codeText: code?.text ?? "",
  });

  const handleManageCounter = async () => {
    if (inputValue.length > 0 && milliseconds === 0) {
      startCounter();
    }
    if (inputValue.length === code?.text?.length) {
      stopCounter();
      handleCreateRace();
    }
  };

  const createRaceMutation = useCreateRaceMutation();

  const handleCreateRace = async () => {
    const race = {
      codeId: code?.id,
      cps: cps,
      timeInMS: milliseconds,
    };

    await createRaceMutation.mutateAsync(race);
    alert("Race created");
  };

  useEffect(() => {
    handleManageCounter();
  }, [inputValue]);
  // Handle race information

  if (isLoading) return <div>Loading...</div>;

  if (createRaceMutation.isSuccess)
    return (
      <RaceStatsView
        cpm={cps}
        code={code}
        timeInMS={milliseconds}
        inputValue={inputValue}
      />
    );

  return (
    <div>
      <div className="flex justify-end mb-5">
        <PrimaryButton onClick={() => navigate("/play")} text="Volver" />
      </div>
      <div className="grid grid-cols-12 gap-x-5 mb-5">
        <div className="col-span-10">
          <ProgressCard code={code?.text ?? ""} inputValue={inputValue} />
        </div>
        <div className="col-span-1">
          <TimeCard milliseconds={milliseconds} text="Tiempo" />
        </div>
        <div className="col-span-1">
          <CPSCard cps={cps} text="CPS" />
        </div>
        <div className="col-span-12 mt-5">
          <CodeCard
            code={code?.text ?? ""}
            inputValue={inputValue}
            onInput={handleCompleteInput}
          />
        </div>
      </div>
    </div>
  );
}
