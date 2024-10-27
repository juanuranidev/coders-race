import Icons from "lib/utils/shared/icons/icons";
import CircularLoader from "components/ui/circular-loader/circular-loader";

interface GitHubButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function GitHubButton({
  text,
  onClick,
  disabled,
  isLoading,
}: GitHubButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center gap-2 px-4 py-1 text-white-500 border-2 rounded-lg border-gray-300 font-semibold hover:bg-gray-700"
    >
      {isLoading ? (
        <CircularLoader className="px-6" />
      ) : (
        <>
          <Icons.github className="w-5 h-5" />
          {text}
        </>
      )}
    </button>
  );
}
