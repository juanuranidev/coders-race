interface Props {
  code: string;
  inputValue: string;
}

export default function ProgressCard({ code, inputValue }: Props) {
  return (
    <div className="bg-black-400 p-5 h-full rounded-lg">
      <p className="font-semibold text-white-500 text-lg pb-5">Progreso</p>
      <div
        role="progressbar"
        className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
      >
        <div
          style={{ width: `${(inputValue?.length * 100) / code?.length!}%` }}
          className="h-2 bg-blue-500 rounded-xl transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
