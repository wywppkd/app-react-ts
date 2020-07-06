import { LOGIN, LOGOUT } from "../../constants";

/**
 * 登录状态
 */
export function loginAction() {
  return {
    type: LOGIN,
  };
}

/**
 * 退出登录状态
 */
export function logouAction() {
  return {
    type: LOGOUT,
  };
}
