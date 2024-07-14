  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  export const getHubApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/repositories?q='}),
    endpoints: (builder) => ({
      getGitHubApi: builder.query({
        query: (value) => `${value}`,
      }),
    }),
  })

  export const { useGetGitHubApiQuery } = getHubApi
