import {createApi} from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../axios/axios";

const buildQuery = (method, v) => v.query({query: (v) =>  ({method, ...v})});
const buildMutation = (method, v) => v.mutation({query: (v) => ({method, ...v})});

export const universalApi = createApi({
  reducerPath: 'universal',
  baseQuery: axiosBaseQuery(),
  endpoints: v => ({
    uGetQ: buildQuery('GET',v),
    uGetM: buildMutation('GET',v),
    uPostM: buildMutation('POST',v),
    uPutM: buildMutation('PUT',v),
    uDeleteM: buildMutation('DELETE',v)
  })
});

export const {
  // GET
  useUGetQQuery,
  useLazyUGetQQuery,
  useUGetMMutation,
  // POST
  useUPostMMutation,
  // PUT
  useUPutMMutation,
  // DELETE
  useUDeleteMMutation,
} = universalApi;