import {
  keepPreviousData,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";
import { readRandomByLanguageApi } from "../api/code.api";
import { Code } from "lib/interfaces/code/code.interfaces";

export function useCodeReadRandomByLanguage(
  languageName: string
): UseQueryResult<Code> {
  return useQuery({
    queryKey: ["code-read-random-by-language", languageName],
    queryFn: () => readRandomByLanguageApi(languageName),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    enabled: languageName !== "",
  });
}
