import { v4 as uuidv4 } from "uuid";

export const uuidAdapter = {
  generate: (): string => {
    console.log("dsdw");
    return uuidv4();
  },
};
