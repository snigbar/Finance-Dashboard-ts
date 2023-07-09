import { GetKpisResponse } from '@/types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: 'main',
    tagTypes:['kpis'],
    endpoints: (build) => ({
        getKpis: build.query<GetKpisResponse[], void>({
            query: () => 'kpi/kpis',
            providesTags: ['kpis']
        })
    })


})

export const {useGetKpisQuery} = api;