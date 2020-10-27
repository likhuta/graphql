import { gql } from 'apollo-boost';

export const directorQuery = gql`
  query directorQuery {
    directors {
      id
      name
      age
      movies {
        name
        id
      }
    }
  }
  `;