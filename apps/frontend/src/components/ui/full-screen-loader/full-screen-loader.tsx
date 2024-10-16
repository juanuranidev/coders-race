import Loader from "components/ui/loader/loader";

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black-500 z-50">
      <Loader />
    </div>
  );
}
