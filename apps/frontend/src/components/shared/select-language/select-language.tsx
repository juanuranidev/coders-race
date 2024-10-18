import * as React from "react";
import Loader from "components/ui/loader/loader";
import { Language } from "lib/interfaces/language/language.interfaces";
import { useState } from "react";
import CustomConfetti from "components/ui/custom-confetti/custom-confetti";
import { getLanguageIcon } from "lib/utils/language/language.utils";
import { useLanguageReadAll } from "services/language/queries/language.queries";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/ui/select/select";
import { Small } from "components/ui/typography/typography";

type Props = {
  selectedLanguage: Language | null;
  onLanguageChange: React.Dispatch<React.SetStateAction<Language | null>>;
};

export default function SelectLanguage({
  selectedLanguage,
  onLanguageChange,
}: Props) {
  const { data, isLoading } = useLanguageReadAll();
  const [triggerConfetti, setTriggerConfetti] = useState<boolean>(false);

  const handleSelectLanguage = (id: string) => {
    const selectedLanguage = data!.find((lang: Language) => lang.id === id);

    if (selectedLanguage) {
      onLanguageChange(selectedLanguage);
    }

    setTriggerConfetti(true);
    setTimeout(() => setTriggerConfetti(false), 100);
  };

  if (isLoading || !data?.length) return <Loader />;

  return (
    <div className="relative w-full">
      <Select onValueChange={(value: string) => handleSelectLanguage(value)}>
        <CustomConfetti
          trigger={triggerConfetti}
          icon={getLanguageIcon(selectedLanguage)}
        />
        <SelectTrigger className="font-medium text-white-500">
          <SelectValue placeholder="Selecciona un lenguaje" />
        </SelectTrigger>
        <SelectContent>
          {data
            ? data.map((language: Language) => (
                <SelectItem key={language.id} value={language.id}>
                  <div className="flex flex-row items-center">
                    <img
                      loading="lazy"
                      alt={language.name}
                      src={getLanguageIcon(language)}
                      className="w-5 h-5 mr-2 text-white-400"
                    />
                    <Small className="text-white-500 font-medium">
                      {language?.name}
                    </Small>
                  </div>
                </SelectItem>
              ))
            : null}
        </SelectContent>
      </Select>
    </div>
  );
}
