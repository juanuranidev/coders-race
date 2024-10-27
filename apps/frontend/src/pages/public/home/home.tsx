import RenderCode from "components/shared/render-code/render-code";
import { useEffect } from "react";
import { ButtonPrimary } from "components/ui/button/button";
import { CODE_CONSTANTS } from "lib/constants/code/code.constants";
import { useCompleteInput } from "hooks/code/useCompleteInput";
import { useNavigate, type NavigateFunction } from "react-router-dom";

export default function Home() {
  const navigate: NavigateFunction = useNavigate();
  const { inputValue, handleAutoCompleteInput } = useCompleteInput({
    code: CODE_CONSTANTS.HOME_CODE,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      handleAutoCompleteInput();
    }, 1000);

    return () => clearInterval(timer);
  }, [handleAutoCompleteInput]);

  return (
    <div className="container mx-auto px-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="mb-4 font-bold text-6xl text-white-500 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-7xl">
            Coders Race
          </h1>
          <p className="text-white-500 text-lg font-semibold mb-8">
            ¿Qué tan rápido puedes programar?
          </p>
          <ButtonPrimary onClick={() => navigate("/play")}>Jugar</ButtonPrimary>
        </div>
        <RenderCode code={CODE_CONSTANTS.HOME_CODE} input={inputValue} />
      </div>
    </div>
  );
}
