import GitHubIcon from "assets/icons/GitHub.svg";

export default function GitHubButton({
  text,
  onClick,
  disabled,
}: any) {
  return (
    <button
      className="flex items-center gap-2 px-4 py-1 text-white-500 border-2 rounded-md border-gray-300 font-semibold hover:bg-[#25252e]"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={GitHubIcon} alt="GitHub Icon" className="w-6 h-6" />
      {text}
    </button>
  );
}
