import { getZekr } from './../api/azkar_api';
import { useQuery } from "@tanstack/react-query";

export type ZekrType = "morning" | "evening";

export const useZekr = (type: string) => {
  return useQuery({
    queryKey: ["zekr", type],
    queryFn: () => getZekr(type),
    staleTime: 1000 * 60 * 5,
  });
};