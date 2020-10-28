import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import { deleteMovieMutation} from './mutation';
import { movieQuery } from '../MoviesTable/queries';


const withGraphqlDelete = graphql( deleteMovieMutation, {
  props: ({mutate}) => ({
    deleteMovie: id => mutate({
      variables: id,
      refetchQueries: [{ query: movieQuery }]
    })
  })
})


export default compose( withGraphqlDelete);
