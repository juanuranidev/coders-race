import { H3, P } from "components/ui/typography/typography";
import GamemodeCard from "pages/public/play/components/gamemode-card/gamemode-card";

export default function Play() {
  return (
    <div>
      <div className="mb-4 bg-black-500 py-2 rounded-xl">
        <H3 className="mb-2">Elige tu modo de juego</H3>
        <P className="text-white-600 font-medium">
          Practica tus habilidades o compite contra otros jugadores.
        </P>
      </div>
      <div className="flex flex-wrap justify-start gap-8">
        <div className="w-[calc(50%-2rem)]">
          <GamemodeCard
            type="practice"
            title="Practicar"
            subtitle="Mejora tu velocidad de programación a tu propio ritmo mediante la práctica."
            gamemodeGif="https://res.cloudinary.com/dhodvztdx/image/upload/v1729130164/coders-race/Grabacio%CC%81n-de-pantalla-2024-10-16-a-la_s_-10.49.09_p.-m._exjmxv.gif"
          />
        </div>
        <div className="w-[calc(50%-2rem)]">
          <GamemodeCard
            type="compete"
            title="Competir"
            subtitle="Compite y pon a prueba tus habilidades, cada partida se guardará en tu perfil."
            gamemodeGif="https://res.cloudinary.com/dhodvztdx/image/upload/v1729130164/coders-race/Grabacio%CC%81n-de-pantalla-2024-10-16-a-la_s_-10.49.09_p.-m._exjmxv.gif"
          />
        </div>
      </div>
    </div>
  );
}
