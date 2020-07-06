import { combineReducers, createStore } from "redux";
// composeWithDevTools避免了TS报错
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import { tokenReducer } from "./reducers/tokenReducer";

/**
 * 合并所有reducer
 */
const rootReducer = combineReducers({ userReducer, tokenReducer });

/**
 * store中所有state的类型
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * 创建/暴露store仓库
 */
export function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
}
