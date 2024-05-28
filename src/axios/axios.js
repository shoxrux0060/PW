import axios from "axios";

const baseURL = 'https://cp.1pay.uz/ru/'

export const AxiosInstance = axios.create({
  baseURL
});

AxiosInstance.interceptors.request.use(request => {
  // const token = Cookies.get("token");
  // request.headers["Authorization"] = `Bearer ${token}`;
  // request.headers["device-type"] = "WEB";
  return request;
});

export const axiosBaseQuery = (baseUrl = '') =>
    async ({url='', method, data, params,...props}) => {
      try {
        const result = await AxiosInstance({url: baseUrl + url, method, data, params,...props})
        return {data: result.data}
      } catch (axiosError) {
        let err = axiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }