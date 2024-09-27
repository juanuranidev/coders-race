import InfoIcon from "assets/icons/Info.svg";
import Tooltip from "components/shared/tooltip/tooltip";

interface Props {
  cps: number;
  text: string;
}

export default function CPSCard({ cps, text }: Props) {
  return (
    <div className="bg-gray-500 p-5 h-full rounded-lg">
      <div className="flex flex-row gap-2 items-center">
        <p className="font-semibold text-white-400 text-lg">{text}</p>
        <Tooltip content="Caracteres por segundo (CPS) se calculan de la siguiente forma: (caracteres escritos / tiempo en segundos) * 60">
          <img src={InfoIcon} width={25} height={25} alt="info icon" />
        </Tooltip>
      </div>
      <p className="font-semibold text-white-400 text-lg">{cps}</p>
    </div>
  );
}