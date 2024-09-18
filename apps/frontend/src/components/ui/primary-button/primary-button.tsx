type Props = {
  text: string;
};

export default function PrimaryButton({ text }: Props) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-sm rounded-md font-bold hover:shadow-lg">
      <p className="text-white-500">{text}</p>
    </button>
  );
}
