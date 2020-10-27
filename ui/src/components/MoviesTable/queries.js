import { gql } from 'apollo-boost';

export const movieQuery = gql`
  query moviesQuery{
    movies{
      id
      name
      genre
      rate
      watched
      director {
        name
      }
    }
  }
  `;