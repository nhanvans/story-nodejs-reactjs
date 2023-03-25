import { createApi } from '@reduxjs/toolkit/query/react'
import { baseNoAuthQuery } from './baseAuthQuery'

export const AuthAPI: any = createApi({
  reducerPath: 'AuthAPI',
  baseQuery: baseNoAuthQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/',
        body,
        method: 'PORT'
      })
    })
  })
})

export const { useLoginMutation } = AuthAPI
