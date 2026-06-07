import axios from "axios";
import { HadithResponse } from '../types/type';
import { env_local } from "@/app/envioroment/enviroment";
import { search_hadith } from "@/app/endpoints/endpoint";

export const getHadiths = async (
  page: number,
  limit: number,
  search: string
): Promise<HadithResponse> => {
  const { data } = await axios.get(
    `${env_local}${search_hadith}`,
    {
      params: {
        search,
        page,
        limit,
      },
    }
  );

  return data;
};