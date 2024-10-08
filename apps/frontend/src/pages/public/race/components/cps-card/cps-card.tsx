import InfoIcon from "assets/icons/Info.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip";

interface Props {
  cps: number;
  text: string;
}

export default function CPSCard({ cps, text }: Props) {
  return (
    <div className="bg-black-400 p-5 h-full rounded-lg">
      <div className="flex flex-row gap-2 items-center">
        <p className="font-semibold text-white-500 text-lg">{text}</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <img src={InfoIcon} width={25} height={25} alt="info icon" />
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Caracteres por segundo (CPS) se calculan de la siguiente forma:
                (caracteres escritos / tiempo en segundos) * 60
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="font-semibold text-white-500 text-lg">{cps}</p>
    </div>
  );
}
