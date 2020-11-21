import { request,requesttest } from "./api";
export function getmultidata() {
  return request({
    url: "home/multidata"
  });
}

export function getgoodlist(params) {
  return request({
    url: "home/data",
    ...params
  });
}
