import React from "react";
import { Card, CardFooter, Image, Divider } from "@nextui-org/react";

type Props = {
  index: number;
  gamemode: any;
  gamemodeImages: string[];
};

export default function GamemodeCardDisabled({
  index,
  gamemode,
  gamemodeImages,
}: Props) {
  return (
    <Card
      isFooterBlurred
      className={`user-select-none opacity-40 cursor-not-allowed bg-backgroundSecondary w-full`}
      isPressable={false}
    >
      <Image
        alt="car image"
        className="image-gradient w-fit h-50"
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
  );
}
