import { TypeTokenAction, SET } from "../../constants";

const initState = {
  token: "",
};
export const tokenReducer = (state = initState, action: TypeTokenAction) => {
  switch (action.type) {
    case SET:
      return {
        token: action.value,
      };
    default:
      return state;
  }
};
