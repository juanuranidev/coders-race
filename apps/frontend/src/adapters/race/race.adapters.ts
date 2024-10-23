export const toRaceCreateApiAdapter = (data: {
  cps: number;
  userId: string;
  codeId: number;
  timeInMS: number;
}) => {
  return {
    cps: Number(data.cps.toFixed(2)),
    userId: String(data.userId),
    codeId: Number(data.codeId),
    timeInMS: Number(data.timeInMS.toFixed(0)),
  };
};
