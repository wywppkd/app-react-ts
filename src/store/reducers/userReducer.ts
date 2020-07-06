import { LOGIN, LOGOUT, TypeUserAction } from "../../constants";

const initState = {
  /**
   * 登录状态: 未知"", 已登录"LOGIN", 未登录"LOGOUT"
   */
  status: "",
};
export function userReducer(state = initState, action: TypeUserAction) {
  switch (action.type) {
    case LOGIN:
      return { status: LOGIN };
    case LOGOUT:
      return { status: LOGOUT };
    default:
      return state;
  }
}
