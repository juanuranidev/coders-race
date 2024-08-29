import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Divider,
  Dropdown,
  CardFooter,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { getLanguagesService } from "services";
import { LanguageType } from "lib/types";
import { LanguageIcon } from "lib/utils";
import { useRouter } from "next/router";
import { Loader } from "components";

type Props = {
  gamemode: any;
  index: number;
  gamemodeImages: string[];
};

export default function GamemodeCard({
  index,
  gamemode,
  gamemodeImages,
}: Props) {
  const router = useRouter();

  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetLanguages = async () => {
    try {
      const response = await getLanguagesService();
      setLanguages(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleNavigateToRace = (gamemode: any, languageName: string) => {
    const url = `${gamemode?.url}/${languageName?.toLowerCase()}`;
    router.push(url);
  };

  useEffect(() => {
    handleGetLanguages();
  }, []);

  return (
    <Dropdown radius="sm">
      <DropdownTrigger>
        <Card
          isFooterBlurred
          className="user-select-none bg-backgroundSecondary w-full opacity-100 cursor-pointer hover:bg-[#26252b]"
        >
          <Image
            alt="car image"
            className="image-gradient"
            src={gamemodeImages[index]}
          />
          <CardFooter className="flex items-center gap-5 p-5">
            <p className="font-bold text-3xl opacity-80 text-secondary">
              {gamemode?.name}
            </p>
            <Divider orientation="vertical" className="h-8" />
            <p className="font-semibold text-sm text-secondary opacity-80 text-left">
              {gamemode?.description}
            </p>
          </CardFooter>
        </Card>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false}>
        {isLoading ? (
          <DropdownItem className="h-[6rem]">
            <Loader />
          </DropdownItem>
        ) : (
          languages.map((language: LanguageType) => (
            <DropdownItem
              key={language.id}
              className="my-2"
              onClick={() => handleNavigateToRace(gamemode, language.name)}
            >
              <div className="flex items-center justify-start gap-3">
                <LanguageIcon language={language.name} width={25} />
                <p className="uppercase text-md">{language?.name}</p>
              </div>
            </DropdownItem>
          ))
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
