import { createAPi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';   

export const api = createApi({
    baseQuery:  fetchBaseQuery({process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: 'api',
    tagTypes: [],
    endpoints: (builder) => ({}),
})

export const {} = api.endpoints;    