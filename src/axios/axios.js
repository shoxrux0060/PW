import axios from "axios";

const baseURL = 'https://cbu.uz/ru/arkhiv-kursov-valyut/json/'

export const api = axios.create({
  baseURL
});

export const axiosBaseQuery = (baseUrl = '') =>
    async ({url='', method, data, params}) => {
      try {
        const result = await api({url: baseUrl + url, method, data, params})
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