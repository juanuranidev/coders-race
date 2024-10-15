import { useState } from "react";
import { Language } from "lib/interfaces/language/language.interfaces";
import SelectLanguage from "components/shared/select-language/select-language";
import { ButtonPrimary } from "components/ui/button/button";
import { Card, CardContent, CardHeader } from "components/ui/card/card";
import { useNavigate, type NavigateFunction } from "react-router-dom";

interface GamemodeCardProps {
  type: string;
  title: string;
  subtitle: string;
  gamemodeGif: string;
}

export default function GamemodeCard({
  type,
  title,
  subtitle,
  gamemodeGif,
}: GamemodeCardProps) {
  const navigate: NavigateFunction = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleStartRace = () => {
    const url: string = `/race/${type}/${selectedLanguage?.name?.toLowerCase()}`;
    navigate(url);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-2 pb-0">
        <div className="relative h-48 rounded-lg">
          <img
            alt={title}
            src={gamemodeGif}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 bg-black-500/50 rounded-lg" />
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb2">{title}</h3>
            <p className="text-sm font-medium text-white-500">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 px-2 flex flex-row items-center justify-between gap-4">
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
        />
        <ButtonPrimary onClick={handleStartRace} disabled={!selectedLanguage}>
          Comenzar
        </ButtonPrimary>
      </CardContent>
    </Card>
  );
}
