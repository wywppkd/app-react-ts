import { SET } from "../../constants";

export const setTokenAction = (value: string) => {
  return {
    type: SET,
    value,
  };
};
