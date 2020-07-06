// 登录状态
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export type TypeUserAction = {
  type: string;
};

// 设置token
export const SET = "SET";
export type TypeTokenAction = {
  type: typeof SET;
  value: string;
};
