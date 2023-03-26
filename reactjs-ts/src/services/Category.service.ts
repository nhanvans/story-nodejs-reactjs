import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { responseCategory } from '../types/category.type'

export const categoryApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'categoryApi',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getCategories` endpoint is a "query" operation that returns data
    getCategories: builder.query<responseCategory, void>({
      // The URL for the request is '/api/categories'
      query: () => '/categories'
    }),
    createCategory: builder.mutation({
      query: (name) => ({
        url: '/categories',
        method: 'POST',
        body: { name }
        // headers: {
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Methods': 'GET, POST',
        //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        //   'Access-Control-Allow-Credentials': true
        // },
        // withCredentials: true
      })
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: '/categories/' + id,
        method: 'DELETE'
      })
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCategoriesQuery, useCreateCategoryMutation, useDeleteCategoryMutation } = categoryApi
