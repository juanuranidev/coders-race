"use client";
import PrimaryButton from "components/ui/primary-button/primary-button";
import { useState } from "react";
import SelectLanguage from "components/shared/select-language/select-language";
import { useNavigate, type NavigateFunction } from "react-router-dom";

interface CardDemoProps {
  gamemodeGif: string;
  title: string;
  subtitle: string;
}

export default function CardDemo({
  gamemodeGif,
  title,
  subtitle,
}: CardDemoProps) {
  const navigate: NavigateFunction = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<any>(null);

  const handleStartGame = () => {
    console.log(selectedLanguage);

    const url: string = `/race/${title.toLowerCase()}/${selectedLanguage.value}`;

    navigate(url);
    console.log(url);
  };

  return (
    <div className="overflow-visible">
      <div className="relative w-full h-48">
        <div
          className="absolute inset-0 transition-all duration-500 rounded-t-xl"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${gamemodeGif})`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="p-4 bg-gray-500 flex flex-col justify-between gap-4 rounded-b-xl">
        <div className="flex items-center gap-5">
          <h1 className="font-bold text-4xl text-white-500">{title}</h1>
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
              onClick={handleStartGame}
              disabled={!selectedLanguage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
