import { useState } from "react";
import { Language } from "lib/interfaces/language/language.interfaces";
import PrimaryButton from "components/ui/primary-button/primary-button";
import SelectLanguage from "components/shared/select-language/select-language";
import { useNavigate, type NavigateFunction } from "react-router-dom";

interface GamemodeCardProps {
  title: string;
  subtitle: string;
  gamemodeGif: string;
}

export default function GamemodeCard({
  title,
  subtitle,
  gamemodeGif,
}: GamemodeCardProps) {
  const navigate: NavigateFunction = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleStartRace = () => {
    const url: string = `/race/${title.toLowerCase()}/${selectedLanguage?.name?.toLowerCase()}`;

    navigate(url);
  };

  return (
    <div className="overflow-visible">
      <div className="relative w-full h-48">
        <div
          style={{ backgroundImage: `url(${gamemodeGif})` }}
          className="absolute inset-0 transition-all duration-500 rounded-t-xl bg-cover bg-center bg-no-repeat w-full h-full bg-black"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="p-4 bg-gray-500 flex flex-col justify-between gap-4 rounded-b-xl">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-4xl text-white-400">{title}</h1>
          <p className="font-medium text-sm text-white-400">{subtitle}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SelectLanguage
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
            />
            <PrimaryButton
              text="Comenzar"
              onClick={handleStartRace}
              disabled={!selectedLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}