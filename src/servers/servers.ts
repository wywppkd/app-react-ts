import $http from "./http";
import { Result } from "../schema/Result";
import { GetToken } from "../schema/GetToken";
import { PhoneNumberLoginReq } from "../schema/PhoneNumberLogin";

export const getToken = async (): Promise<Result<GetToken>> => {
  const data = {
    blockId: "1200011",
    areaId: "2200001",
    accessPlatForm: 5,
  };
  return $http.get({
    url: "/joinUp/getToken",
    data,
  });
};

// 用户手机号登陆
export const dynamicAuthor = (data: PhoneNumberLoginReq): Promise<Result<null>> => {
  return $http.post({
    url: "/joinUp/dynamicAuthor",
    data: data,
  });
};
