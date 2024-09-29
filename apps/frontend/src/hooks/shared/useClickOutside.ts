import { useEffect, useRef } from "react";

interface UseClickOutsideProps {
  onClickOutside: () => void;
}
interface UseClickOutsideReturn {
  ref: React.RefObject<HTMLDivElement>;
}

export function useClickOutside({
  onClickOutside,
}: UseClickOutsideProps): UseClickOutsideReturn {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  return { ref };
}
