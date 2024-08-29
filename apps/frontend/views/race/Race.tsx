import React, { useState, useEffect, useRef } from "react";
import { successToast } from "lib/utils";
import { getRandomCodeByLanguageService } from "services/codes";
import { handleRenderComponentBody } from "./Utils";
import { postRaceService } from "services";
import { useDisclosure } from "@mantine/hooks";
import { useUserData, useMillisecondCounter } from "lib/hooks";
import { useRouter } from "next/router";

type Props = {};

export default function Race({ type }: any) {
  const router = useRouter();
  const userData = useUserData();
  const { language } = router.query;
  const hasFetchedCode = useRef(false);
  const [active, handlers] = useDisclosure(true);
  const { milliseconds, startCounter, stopCounter } = useMillisecondCounter();

  const [cpm, setCpm] = useState("0");
  const [code, setCode] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [raceCompleted, setRaceCompleted] = useState<any>(null);

  const handleManageTimer = () => {
    if (inputValue?.length) {
      startCounter();
    }
  };

  const handleHasFinishedTheRace = () => {
    if (inputValue?.length === code?.text?.length) {
      if (type === "race") {
        stopCounter();
        successToast("¡Completado!");
        handlePostRace();
      } else if (type === "practice") {
        stopCounter();
        successToast("¡Completado!");

        const race = {
          cpm: cpm,
          code: {
            text: code?.text,
          },
          user: userData?.id,
          timeInMs: milliseconds,
          language: {
            name: code?.language.name,
          },
        };

        setRaceCompleted(race);
      }
    }
  };

  const handleGetCode = async () => {
    setIsLoading(true);
    try {
      const response = await getRandomCodeByLanguageService(language);
      setCode(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handlePostRace = async () => {
    setIsLoading(true);
    try {
      const data = {
        cpm: Number(cpm),
        code: code.id,
        user: userData.id,
        timeInMs: milliseconds,
      };

      const response = await postRaceService(data);

      setRaceCompleted(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleManageTimer();
    handleHasFinishedTheRace();
  }, [active, inputValue]);

  useEffect(() => {
    if (!hasFetchedCode.current && language) {
      handleGetCode();
      hasFetchedCode.current = true;
    }
  }, [language]);

  return (
    <div className="container mx-auto px-5">
      <p className="font-semibold text-secondary py-8 text-lg">
        {raceCompleted ? "¡Carrera terminada!" : "Escribe el siguiente código"}
      </p>
      {handleRenderComponentBody({
        cpm,
        code,
        setCpm,
        active,
        handlers,
        isLoading,
        inputValue,
        milliseconds,
        setInputValue,
        raceCompleted,
      })}
    </div>
  );
}
