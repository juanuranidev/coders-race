import { Duration } from "luxon";

const formatMilisecondsToSeconds = (miliseconds: number) => {
  return Duration.fromMillis(miliseconds).as("seconds");
};

export default formatMilisecondsToSeconds;
