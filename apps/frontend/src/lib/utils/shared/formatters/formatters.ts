import { DateTime } from "luxon";

export const formatDate = (date: string | Date): string => {
    return DateTime.fromISO(date.toString()).toFormat("dd/MM/yyyy");
};
