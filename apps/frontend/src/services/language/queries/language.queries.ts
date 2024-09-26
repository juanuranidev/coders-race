import {
  keepPreviousData,
  useQuery,
  type UseQueryResult,
} from "@tanstack/react-query";
import { readAllLanguagesApi } from "../api/language.api";
import { Language } from "lib/interfaces/language/language.interfaces";

export function useLanguageReadAll(): UseQueryResult<Language[]> {
  return useQuery({
    queryKey: ["language-read-all"],
    queryFn: () => readAllLanguagesApi(),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
}
