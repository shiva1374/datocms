import { GraphQLClient } from 'graphql-request'
import { RequestProps } from './types'

export const request = ({ query, variables, preview }: RequestProps) => {
  const endpoint = preview
    ? `${process.env.NEXT_DATOCMS_API_ENDPOINT}/preview`
    : process.env.NEXT_DATOCMS_API_ENDPOINT
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
