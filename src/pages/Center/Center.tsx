import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { loginAction, logouAction } from "../../store/actions/userActions";
import { setTokenAction } from "../../store/actions/tokenActions";
interface ICenterProps {}

const Center: React.FC<ICenterProps> = (props) => {
  const { userReducer, tokenReducer } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();
  console.log("dispatch", dispatch);

  // 登录
  const dispatchLogin = useCallback(() => {
    dispatch(loginAction());
  }, [dispatch]);

  // 登录
  const dispatchLogout = useCallback(() => {
    dispatch(logouAction());
  }, [dispatch]);

  // 登录
  const dispatchSetAction = useCallback(() => {
    dispatch(setTokenAction("123"));
  }, [dispatch]);

  return (
    <div>
      <h1>Center {userReducer.status}</h1>
      <button onClick={dispatchLogin}>登录</button>
      <button onClick={dispatchLogout}>退出</button>
      <button onClick={dispatchSetAction}>
        设置token {tokenReducer.token}
      </button>
    </div>
  );
};

export default Center;
