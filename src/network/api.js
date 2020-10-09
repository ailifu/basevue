import axios from "axios";
export function request(params) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  instance.interceptors.request.use(
    //拦截器
    config => {
      return config;
    },
    error => {
      return console.log(error);
    }
  );
  
  instance.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return console.log(error);
    }
  )


  return instance(params);
}
