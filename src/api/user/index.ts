import { http } from "@/utils/http";

export const getUserInfo = () => {
  return http.request("get", "/user/info");
}