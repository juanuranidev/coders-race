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
  disabled?: boolean;
  gamemodeGif: string;
}

export default function GamemodeCard({
  type,
  title,
  subtitle,
  disabled,
  gamemodeGif,
}: GamemodeCardProps) {
  const navigate: NavigateFunction = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleStartRace = () => {
    if (disabled) return;
    const url: string = `/race/${type}/${selectedLanguage?.name?.toLowerCase()}`;
    navigate(url);
  };

  return (
    <Card className="overflow-hidden" disabled={disabled}>
      <CardHeader className="pb-0">
        <div className="relative h-48 rounded-lg">
          <img
            alt={title}
            src={gamemodeGif}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute inset-0 bg-black-500/80 rounded-lg" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm font-medium text-white-600">{subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4 flex flex-row items-center justify-between gap-4">
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          disabled={disabled}
        />
        <ButtonPrimary
          onClick={handleStartRace}
          disabled={disabled || !selectedLanguage}
        >
          Comenzar
        </ButtonPrimary>
      </CardContent>
    </Card>
  );
}
