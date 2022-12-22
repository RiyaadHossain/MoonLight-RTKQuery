import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://moon-light-server.vercel.app"}),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        })
    })
})

export const { useGetProductsQuery } = productApi