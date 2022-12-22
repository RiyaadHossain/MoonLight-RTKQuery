import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://moon-light-server.vercel.app" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
            providesTags: ["Product"]
        }),
        addProduct: builder.mutation({
            query: (productData) => ({
                url: '/product',
                body: productData,
                method: 'POST'
            }),
            invalidatesTags: ["Product"]
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]
        })
    })
})

export const { useGetProductsQuery, useAddProductMutation, useRemoveProductMutation } = productApi