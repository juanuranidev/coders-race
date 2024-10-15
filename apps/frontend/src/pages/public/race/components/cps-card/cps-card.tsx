import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "components/ui/tooltip/tooltip";
import Icons from "lib/utils/shared/icons/icons";

interface Props {
  cps: number;
  text: string;
}

export default function CPSCard({ cps, text }: Props) {
  return (
    <div className="bg-gray-500 p-4 h-full rounded-lg">
      <div className="flex flex-row gap-2 items-center mb-2">
        <p className="font-semibold text-white-500 text-lg">{text}</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Icons.info />
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
