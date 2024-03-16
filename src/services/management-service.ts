import ky from "ky";
import { API_MANAGEMENT, API_URL } from "@/utils/constants.ts";
export interface Sensor {
  id: number;
}

const getAllSensors = async (): Promise<Sensor[]> => {
  return await ky(API_URL + API_MANAGEMENT + "/sensors").json();
};

export const managementService = {
  getAllSensors,
};
