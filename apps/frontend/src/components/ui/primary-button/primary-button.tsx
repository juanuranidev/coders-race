import { cn } from "lib/utils";

type Props = {
  text: string;
  onClick: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
};

export default function PrimaryButton({
  text,
  onClick,
  disabled,
  fullWidth = false,
}: Props) {
  return (
    // <button
    //   onClick={onClick}
    //   disabled={disabled}
    //   className={cn(
    //     "px-4 py-2 bg-blue-500 text-sm rounded-md font-bold hover:shadow-lg",
    //     fullWidth && "w-full",
    //     disabled && "opacity-50 cursor-not-allowed"
    //   )}
    // >
    <p className="text-white-500">{text}</p>
    // </button>
  );
}
