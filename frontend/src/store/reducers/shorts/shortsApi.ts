import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://66a61d7f23b29e17a1a1c4ea.mockapi.io/"

export interface Comment {
  id: number,
  author: string,
  message: string,
  likes: number,
  answersCount?: number
  parentId?: number
}


export const shortsApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => `comments`,
    }),
    getAnswers: builder.query<Comment[], number>({
      query: (id) => `answers?parentId=${id}`,
    })
  }),
})

export const { useGetCommentsQuery,useGetAnswersQuery } = shortsApi;