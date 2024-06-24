import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


//defining a service using a BASE_URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: builder => ({
    getAllPost: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
  }),
});

//export the auto generated hooks to use in functional compomnets.
export const {useGetAllPostQuery} = postApi;