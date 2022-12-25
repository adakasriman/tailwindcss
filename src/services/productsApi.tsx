import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiDataObject, ProductArray } from "../models/product.model";


export const productsApi = createApi({  // created productsApi by using createApi
    reducerPath: "productsApi",  // reducerPath is productsApi
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    tagTypes: ['product'],
    endpoints: (builder) => ({  // using builder can create enpoints
        products: builder.query<ApiDataObject, void>({
            query: () => '/products', // contacts is end point of the server
            providesTags: ['product']  // updating data 
        }),
        product: builder.query<ProductArray, string | undefined>({
            query: (id) => `/products/${id}`,  //getting data of id
            providesTags: ['product']  // updating data 
        }),
        categories: builder.query<string[], void>({
            query: () => `/products/categories`,  //getting data of id
            providesTags: ['product']  // updating data 
        }),
        search: builder.query<ApiDataObject, string>({
            query: (searchItem: string) => `/products/search?q=${searchItem}`,  //getting data of search item
            providesTags: ['product']  // updating data 
        }),
        category: builder.query<ApiDataObject, string | undefined>({
            query: (searchItem) => `/products/category/${searchItem}`,  //getting data of search item
            providesTags: ['product']  // updating data 
        }),
        serchFilter: builder.query<ApiDataObject, any>({
            // query: (searchItems) => `/products?limit=${searchItems.limit}&skip=${searchItems.skip}&select=${searchItems.select}&${searchItems.price}`,
            query: (searchItems) => `/products?limit=${searchItems.limit}&skip=${searchItems.skip}&select=${searchItems.select}&&price=${searchItems.price}`,


            //getting data of search item
            providesTags: ['product']  // updating data 
        }),
        addProduct: builder.mutation<any , any >({
            query: (product)/*new record*/ => ({ // contact is new record
                url: '/products/add',
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: product
            }),
            // invalidatesTags: ['product'] // updating data 
        }),
        edit: builder.mutation<ProductArray, any>({
            query: (product: any)/*new record*/ => ({ // contact is new record
                url: `/products/${product.id}`,
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: product?.title
                })
            }),
            // invalidatesTags: ['product'] // updating data 
        }),
        delete: builder.mutation<ProductArray, number>({
            query: (id)/*new record*/ => ({ // contact is new record
                url: `/products/${id}`,
                method: "DELETE",
            }),
            // invalidatesTags: ['product'] // updating data 
        }),
    })
})

export const { useProductsQuery, useProductQuery, useCategoriesQuery, useSearchQuery, useCategoryQuery, useAddProductMutation, useEditMutation, useDeleteMutation,useSerchFilterQuery } = productsApi;