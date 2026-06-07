import { useQuery } from "@tanstack/react-query";
import { getHadiths } from "../api/hadith";

export const useHadiths = (
  page: number,
  limit: number,
  search: string
) => {
  const query = useQuery({
    queryKey: ["hadiths", page, limit, search],
    queryFn: () => getHadiths(page, limit, search),
    placeholderData: (prev) => prev,
    staleTime: 1000 * 60 * 5,
  });

  return {
    ...query,
    hadiths: query.data?.data ?? [],
    totalItems: query.data?.totalItems ?? 0,
    totalPages: query.data?.totalPages ?? 1,
    currentPage: query.data?.currentPage ?? 1,
  };
};