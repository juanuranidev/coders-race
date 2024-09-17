import React from "react";
import Navbar from "components/shared/navbar/navbar";
import RenderCode from "components/shared/renderCode/render-code";
import { useEffect } from "react";
import PrimaryButton from "components/ui/primary-button/primary-button";
import BackgroundCode from "components/shared/background-code/BackgroundCode";
import { CODE_CONSTANTS } from "lib/constants/code/code.constants";
import { useCompleteInput } from "hooks/code/useCompleteInput";

type Props = {};

export default function Home({}: Props) {
  const { inputValue, handleCompleteInput } = useCompleteInput({
    code: CODE_CONSTANTS.HOME_CODE,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      handleCompleteInput();
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div className="bg-background-dark relative">
      <div className="bg-background-dark absolute inset-0 overflow-hidden min-h-[100vh] max-h-[100vh] z-0 pt-20">
        {CODE_CONSTANTS.HOME_BACKGROUND_CODES.map((code: { text: string }) => (
          <BackgroundCode key={code.text} code={code} />
        ))}
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start">
              <h1 className="text-7xl mb-4 font-bold text-6xl text-white-500 bg-clip-text text-transparent">
                Coders Race
              </h1>
              <p className="text-white-400 text-lg font-semibold mb-8">
                ¿Qué tan rápido puedes codear?
              </p>
              <PrimaryButton text="Comenzar" />
            </div>
            <RenderCode code={CODE_CONSTANTS.HOME_CODE} input={inputValue} />
          </div>
        </div>
      </div>
    </div>
  );
}
