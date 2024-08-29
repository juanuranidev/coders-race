import { request } from "lib/utils";
import { RaceType } from "lib/types";

export const postRaceService = async (data: RaceType) => {
  try {
    const response = await request({
      method: "POST",
      url: "api/race",
      data: data,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
