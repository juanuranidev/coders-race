import { cn } from "lib/utils";

type Props = {
  text: string;
  fullWidth?: boolean;
};

export default function PrimaryButton({ text, fullWidth = false }: Props) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-blue-500 text-sm rounded-md font-bold hover:shadow-lg",
        fullWidth && "w-full"
      )}
    >
      <p className="text-white-500">{text}</p>
    </button>
  );
}
