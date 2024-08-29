import React from "react";
import { formatMillisecondsToSeconds, LanguageIcon } from "lib/utils";
import { CPM, ProgressCard, RaceCard, TimeCard } from "./components";
import { Loader } from "components";
import { Card } from "@nextui-org/react";

export const handleRenderComponentBody = ({
  cpm,
  code,
  active,
  setCpm,
  handlers,
  isLoading,
  inputValue,
  milliseconds,
  setInputValue,
  raceCompleted,
}: any) => {
  if (!code?.text || isLoading) {
    return <Loader />;
  } else if (raceCompleted) {
    return (
      <Card className="bg-backgroundSecondary p-5 flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <p className="font-semibold text-secondary text-md">CPM:</p>
          <p>{raceCompleted?.cpm}</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-semibold text-secondary text-md">Segundos:</p>
          <p>{formatMillisecondsToSeconds(raceCompleted?.timeInMs)}s</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-semibold text-secondary text-md">Lenguage:</p>
          <p>
            {raceCompleted?.language?.name}{" "}
            <LanguageIcon
              language={raceCompleted?.language?.name}
              height={20}
              width={20}
            />
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-semibold text-secondary text-md">Código:</p>
          <p>{raceCompleted?.code?.text}</p>
        </div>
      </Card>
    );
  } else {
    return (
      <React.Fragment>
        <div className="grid grid-cols-8 gap-x-5 mb-5">
          <div className="col-span-6">
            <ProgressCard
              code={code?.text}
              active={active}
              handlers={handlers}
              inputValue={inputValue}
              milliseconds={milliseconds}
              setInputValue={setInputValue}
            />
          </div>
          <div className="col-span-1">
            <TimeCard milliseconds={milliseconds} />
          </div>
          <div className="col-span-1">
            <CPM
              milliseconds={milliseconds}
              inputValue={inputValue}
              cpm={cpm}
              setCpm={setCpm}
            />
          </div>
        </div>
        <div>
          <RaceCard
            code={code?.text}
            active={active}
            handlers={handlers}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          {!active ? (
            <p className="font-semibold text-secondary pt-5 text-lg text-center">
              ¡Haz click en el código para escribir!
            </p>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
};
