"use client";
import PrimaryButton from "components/ui/primary-button/primary-button";
import { useState } from "react";
import SelectLanguage from "components/shared/select-language/select-language";

interface CardDemoProps {
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  subtitle: string;
}

export default function CardDemo({
  imageUrl,
  hoverImageUrl,
  title,
  subtitle,
}: CardDemoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<any>(null);

  return (
    <div
      className="group w-full overflow-visible relative card rounded-md mx-auto flex flex-col border border-transparent dark:border-neutral-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-48 transition-all duration-500"
        style={{
          backgroundImage: `url(${isHovered ? hoverImageUrl : imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 bg-background-gray flex flex-col justify-between gap-4">
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
            <PrimaryButton text="Comenzar" />
          </div>
        </div>
      </div>
    </div>
  );
}
