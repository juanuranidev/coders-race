interface CircularLoaderProps {
  className?: string;
}

export default function CircularLoader({
  className = "",
}: CircularLoaderProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        role="status"
        aria-label="Loading"
        className={`w-6 h-6 border-4 border-t-transparent rounded-full animate-spin border border-white-500`}
      />
    </div>
  );
}
