import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
// import { logout } from 'redux/slices/authSlices';

export const baseNoAuthQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_AUTH_URL,
  cache: 'no-cache'
})
export const baseAuthQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_AUTH_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
  cache: 'no-cache'
})

export const baseAuthQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseAuthQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    const refreshArgs = {
      url: '/oauth/token',
      body: {
        refresh_token: localStorage.getItem('refreshToken'),
        grant_type: 'refresh_token',
        client_id: 'WebClient',
        client_secret: 'W20e20b'
      },
      method: 'POST'
    }

    const { data }: { [key: string]: any } = await baseAuthQuery(refreshArgs, api, extraOptions)

    if (data) {
      localStorage.setItem('accessToken', data.access_token)
      localStorage.setItem('refreshToken', data.refresh_token)
    } else {
      // api.dispatch(logout());
    }
    result = await baseAuthQuery(args, api, extraOptions)
  }
  return result
}
