import { CODE_CONSTANTS } from "lib/constants/code/code.constants";
import BackgroundCode from "./components/background-code/background-code";

export default function BackgroundCodes() {
  return (
    <div className="absolute inset-0 overflow-hidden w-screen min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] mt-[5rem] z-0">
      {CODE_CONSTANTS.HOME_BACKGROUND_CODES.map((code, index) => (
        <BackgroundCode key={index} code={code} />
      ))}
    </div>
  );
}
