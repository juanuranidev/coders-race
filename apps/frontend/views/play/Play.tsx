import React from "react";
import { gamemodes } from "./Utils";
import { useUserData } from "lib/hooks";
import GamemodeCard from "views/play/components/GamemodeCard";
import GamemodeCar1 from "assets/images/GamemodeCar1.png";
import GamemodeCar2 from "assets/images/GamemodeCar2.png";
import GamemodeCar3 from "assets/images/GamemodeCar3.png";
import GamemodeCardDisabled from "./components/GamemodeCardDisabled";

export default function Play() {
  const userData = useUserData();
  const gamemodeImages = [GamemodeCar1.src, GamemodeCar2.src, GamemodeCar3.src];

  const handleIsGamemodeDisabled = (gamemode: any): boolean => {
    if (gamemode?.isDisabled) return true;
    if (gamemode?.requiresUser && !userData) return true;

    return false;
  };

  return (
    <div className="container mx-auto px-5 pb-10">
      <p className="font-semibold text-secondary py-8 text-lg">
        Elige tu modo de juego
      </p>
      <div className="grid grid-cols-2 gap-4">
        {gamemodes.map((gamemode: any, index: number) => {
          if (handleIsGamemodeDisabled(gamemode)) {
            return (
              <GamemodeCardDisabled
                key={index}
                index={index}
                gamemode={gamemode}
                gamemodeImages={gamemodeImages}
              />
            );
          } else {
            return (
              <GamemodeCard
                key={index}
                index={index}
                gamemode={gamemode}
                gamemodeImages={gamemodeImages}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
