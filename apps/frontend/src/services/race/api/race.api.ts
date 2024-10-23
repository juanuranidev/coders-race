import { toRaceCreateApiAdapter } from "adapters/race/race.adapters";
import { Race } from "lib/interfaces/race/race.interfaces";
import request from "services/request";

export const createRaceApi = async ({
  codeId,
  cps,
  timeInMS,
  userId,
}: {
  cps: number;
  codeId: number;
  userId: string;
  timeInMS: number;
}): Promise<void> => {
  const response = await request({
    method: "POST",
    url: "/race/v1/create",
    data: toRaceCreateApiAdapter({ codeId, cps, timeInMS, userId }),
  });

  return response.data;
};

export const getRacesByUserIdApi = async (): Promise<Race[]> => {
  const response = await request({
    method: "GET",
    url: "/race/v1/read-by-user-id",
  });

  return response.data;
};
