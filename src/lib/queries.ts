// lib/queries.ts
import { gql } from 'urql';

export const DATA_QUERY = gql`
  {
    blocks(first: 5) {
      id
      number
      timestamp
      parentHash
    }
  }
`;