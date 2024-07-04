import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
 import {endPoints} from '../endpoints';
import { DOMAIN } from '../../utils/Constants';
 
const baseUrl = 'https://console.indolj.io/mobileapp/apiV2/';
const customBaseUrl = 'https://console.indolj.io/mobileapp/apiV2/';

export const menuApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: builder => ({
    getAllMenu: builder.query({
      query: () => ({
        url: `${customBaseUrl}${endPoints.accessibility}?json=1&email=rafaymustafa.symits@gmail.com&password=)N1>?z9V[X£Z0m4&accessibility=WLApp${customBaseUrl}${endPoints.structuredMenu}?domain=${DOMAIN}&json=1&api`,
        method: 'GET',
      }),
      transformResponse: response => Object.values(response),
    }),
  }),
});

export const {useGetAllMenu} = menuApi;
