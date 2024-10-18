import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "components/ui/card/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "components/ui/tooltip/tooltip";
import Icons from "lib/utils/shared/icons/icons";

interface Props {
  cps: number;
  text: string;
}

export default function CPSCard({ cps, text }: Props) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-row gap-2 items-center">
            {text}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Icons.info className="w-4 h-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-500 z-100">
                  <p>
                    Caracteres por segundo (CPS) se calculan de la siguiente
                    forma: (caracteres escritos / tiempo en segundos) * 60
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-white-500 text-lg">{cps}</p>
      </CardContent>
    </Card>
  );
}
