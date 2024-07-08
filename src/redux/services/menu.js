import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {endPoints} from '../endpoints';
import {DOMAIN} from '../../utils/Constants';

const baseUrl = 'https://api.uber.com/v2/eats/stores/1/';

 

export const menuApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: builder => ({
    getAllMenu: builder.query({
      query: () => ({
        url:'menus',
          method: 'GET',
      }),
      transformResponse: response => Object.values(response),
    }),
  }),
});

export const {useGetAllMenuQuery} = menuApi;
