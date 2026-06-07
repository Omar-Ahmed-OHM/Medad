import { azkar } from "@/app/endpoints/endpoint";
import { env_local, env_prod } from "@/app/envioroment/enviroment";
import axios from "axios";
export const getZekr = async (type: string) => {
  const res = await axios.get(`${env_prod}${azkar}/${type}`);
  return res.data;
};