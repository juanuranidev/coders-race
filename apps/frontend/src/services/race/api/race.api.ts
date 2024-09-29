import { toRaceCreateApiAdapter } from "adapters/race/race.adapters";
import request from "services/request";

export const createRaceApi = async ({
  codeId,
  cps,
  timeInMS,
}: any): Promise<void> => {
  const response = await request({
    method: "POST",
    url: "/race/v1/create",
    data: toRaceCreateApiAdapter({ codeId, cps, timeInMS }),
  });

  return response.data;
};
