import GamemodeCard from "pages/public/play/components/gamemode-card/gamemode-card";

export default function Play() {
  return (
    <div>
      <p className="text-white-500 font-medium text-lg mb-10">
        Elige tu modo de juego
      </p>
      <div className="flex flex-wrap justify-between gap-[20px]">
        <div className="w-[calc(33.33%-20px)]">
          <GamemodeCard
            title="Practicar"
            subtitle="Mejora tu velocidad de programación a tu propio ritmo mediante la práctica."
            gamemodeGif="https://paralelo32cdn.eleco.com.ar/media/2017/08/Como-Subir-un-GIF-a-Facebook-Twitter-e-Instagram.gif"
          />
        </div>
        <div className="w-[calc(33.33%-20px)]">
          <GamemodeCard
            title="Competir"
            subtitle="Compite y pon a prueba tus habilidades, cada partida se guardará en tu perfil."
            gamemodeGif="https://paralelo32cdn.eleco.com.ar/media/2017/08/Como-Subir-un-GIF-a-Facebook-Twitter-e-Instagram.gif"
          />
        </div>
        <div className="w-[calc(33.33%-20px)]">
          <GamemodeCard
            title="Torneo"
            subtitle="Participa en competencias organizadas"
            gamemodeGif="https://paralelo32cdn.eleco.com.ar/media/2017/08/Como-Subir-un-GIF-a-Facebook-Twitter-e-Instagram.gif"
          />
        </div>
      </div>
    </div>
  );
}