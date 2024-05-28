import {createApi} from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../axios/axios";

const buildQuery = (method:string, v:any) => v.query({query: (v:any) =>  ({method, ...v})});
const buildMutation = (method:string, v:any) => v.mutation({query: (v:any) => ({method, ...v})});

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