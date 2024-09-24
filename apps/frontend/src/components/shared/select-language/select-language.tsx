import { useState } from "react";
import PythonIcon from "assets/icons/Python.svg";
import JavaScriptIcon from "assets/icons/JavaScript.svg";
import TypeScriptIcon from "assets/icons/TypeScript.svg";
import Confetti from "components/ui/confetti/confetti";

interface Language {
  value: string;
  label: string;
  icon: string;
}

const languages: Language[] = [
  { value: "typescript", label: "TypeScript", icon: TypeScriptIcon },
  { value: "javascript", label: "JavaScript", icon: JavaScriptIcon },
  { value: "python", label: "Python", icon: PythonIcon },
];

type Props = {
  selectedLanguage: Language | null;
  onLanguageChange: (language: Language) => void;
};

export default function SelectLanguage({
  selectedLanguage,
  onLanguageChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerConfetti, setTriggerConfetti] = useState(false);

  return (
    <div className="relative flex-grow">
      <button
        type="button"
        className="bg-background-gray border border-gray-300 text-white-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLanguage ? (
          <>
            <img
              src={selectedLanguage.icon}
              alt={selectedLanguage.label}
              className="w-5 h-5 inline-block mr-2"
            />
            {selectedLanguage.label}
          </>
        ) : (
          "Choose a language"
        )}
      </button>
      <Confetti icon={selectedLanguage?.icon || ""} trigger={triggerConfetti} />
      {isOpen && (
        <div className="absolute z-50 w-full bg-background-gray border border-gray-300 mt-1 rounded-lg shadow-lg top-full left-0">
          {languages.map((lang) => (
            <button
              key={lang.value}
              className="flex items-center w-full px-4 py-2 text-left text-white-400 hover:bg-gray-700"
              onClick={() => {
                onLanguageChange(lang);
                setIsOpen(false);
                setTriggerConfetti(true);
                setTimeout(() => setTriggerConfetti(false), 100);
              }}
            >
              <img
                src={lang.icon}
                alt={lang.label}
                className="w-5 h-5 mr-2 text-white-400"
              />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
