import { request } from "./api";
export function getmultidata() {
  return request({
    url: "home/multidata"
  });
}
