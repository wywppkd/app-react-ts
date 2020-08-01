import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { loginAction, logouAction } from "../../store/actions/userActions";
import { setTokenAction } from "../../store/actions/tokenActions";
import { getToken, dynamicAuthor } from "../../servers/servers";

interface ICenterProps { }

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

  const getData = async () => {
    const res = await getToken()
    console.log("getData -> res", res)
  }

  const getData2 = async () => {
    const res = await dynamicAuthor({ encryptedData: "444", iv: "555" })
    console.log("getData -> res", res)
  }

  return (
    <div>
      <h1>Center {userReducer.status}</h1>
      <button onClick={dispatchLogin}>登录</button>
      <button onClick={dispatchLogout}>退出</button>
      <button onClick={dispatchSetAction}>
        设置token {tokenReducer.token}
      </button>
      <button onClick={getData}>getToken</button>
      <button onClick={getData2}>授权手机号登录</button>
    </div>
  );
};

export default Center;
