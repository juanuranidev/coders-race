import classNames from "classnames";

interface Props {
  index: number;
  input: string;
  character: string;
}

export default function Character({ character, index, input }: Props) {
  const isSpace: boolean = character === "\n";
  const isExpected: boolean = input.length === index;
  const isCompleted: boolean = input.length > index;

  const SPACE_CHARACTER: string = "↵ \n";

  const characterClass = classNames("text-white-500", "text-xl", "inline", {
    "opacity-50": !isCompleted,
    "opacity-100": isCompleted,
    "bg-violet-500 ": isExpected,
  });

  return (
    <p className={characterClass}>{isSpace ? SPACE_CHARACTER : character}</p>
  );
}
