import Loader from "components/ui/loader/loader";
import useMillisecondCounter from "hooks/code/useMilisecondsCounter";
import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import ProgressCard from "./components/progress-card/progress-card";
import TimeCard from "./components/time-card/time-card";

export default function Race() {
  const { gamemode, language } = useParams();
  console.log(gamemode, language);
  const [code, setCode] = useState<any>({
    text: `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n}`,
    language: {
      name: "JavaScript",
    },
  });

  const { milliseconds, startCounter, stopCounter } = useMillisecondCounter();

  const [cpm, setCpm] = useState("0");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [raceCompleted, setRaceCompleted] = useState<any>(null);

  const handleManageTimer = () => {
    if (inputValue?.length) {
      startCounter();
    }
  };

  //   const handleHasFinishedTheRace = () => {
  //     if (inputValue?.length === code?.text?.length) {
  //       if ("race" === "race") {
  //         stopCounter();
  //         // successToast("¡Completado!");
  //         // handlePostRace();
  //       } else if ("type" === "practice") {
  //         stopCounter();
  //         // successToast("¡Completado!");

  //         const race = {
  //           cpm: cpm,
  //           code: {
  //             text: code?.text,
  //           },
  //           user: "userData?.id",
  //           timeInMs: milliseconds,
  //           language: {
  //             name: code?.language.name,
  //           },
  //         };

  //         setRaceCompleted(race);
  //       }
  //     }
  //   };

  //   const handleGetCode = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await getRandomCodeByLanguageService(language);
  //       setCode(response);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //     setIsLoading(false);
  //   };

  //   const handlePostRace = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = {
  //         cpm: Number(cpm),
  //         code: code.id,
  //         user: userData.id,
  //         timeInMs: milliseconds,
  //       };

  //       const response = await postRaceService(data);

  //       setRaceCompleted(response);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     handleManageTimer();
  //     // handleHasFinishedTheRace();
  //   }, [active, inputValue]);

  //   useEffect(() => {
  //     if (!hasFetchedCode.current && language) {
  //       handleGetCode();
  //       hasFetchedCode.current = true;
  //     }
  //   }, [language]);

  {
    /* <p className="font-semibold text-secondary py-8 text-lg">
{raceCompleted ? "¡Carrera terminada!" : "Escribe el siguiente código"}
</p> */
  }

  //   if (!code?.text || isLoading) {
  //     return <Loader />;
  //   } else if (raceCompleted) {
  //     return (
  //       <div className="bg-backgroundSecondary p-5 flex flex-col gap-2">
  //         <div className="flex flex-row items-center gap-2">
  //           <p className="font-semibold text-secondary text-md">CPM:</p>
  //           <p>{raceCompleted?.cpm}</p>
  //         </div>
  //         <div className="flex flex-row items-center gap-2">
  //           <p className="font-semibold text-secondary text-md">Segundos:</p>
  //           {/* <p>{formatMillisecondsToSeconds(raceCompleted?.timeInMs)}s</p> */}
  //         </div>
  //         <div className="flex flex-row items-center gap-2">
  //           <p className="font-semibold text-secondary text-md">Lenguage:</p>
  //           <p>
  //             {raceCompleted?.language?.name}{" "}
  //             {/* <LanguageIcon
  //               language={raceCompleted?.language?.name}
  //               height={20}
  //               width={20}
  //             /> */}
  //           </p>
  //         </div>
  //         <div className="flex flex-row items-center gap-2">
  //           <p className="font-semibold text-secondary text-md">Código:</p>
  //           <p>{raceCompleted?.code?.text}</p>
  //         </div>
  //       </div>
  //     );
  //   } else {
  return (
    <div>
      <div className="grid grid-cols-8 gap-x-5 mb-5">
        <div className="col-span-6">
          <ProgressCard code={code?.text} inputValue={inputValue} />
        </div>
        <div className="col-span-1">
          <TimeCard milliseconds={milliseconds} />
        </div>
        <div className="col-span-1">
          {/* <CPM milliseconds={milliseconds} /> */}
        </div>
      </div>
      <div>
        {/* <RaceCard
            code={code?.text}
            active={active}
            handlers={handlers}
            inputValue={inputValue}
            setInputValue={setInputValue}
          /> */}
        {/* {!active ? (
            <p className="font-semibold text-secondary pt-5 text-lg text-center">
              ¡Haz click en el código para escribir!
            </p>
          ) : null} */}
      </div>
    </div>
  );
  //   }
}
