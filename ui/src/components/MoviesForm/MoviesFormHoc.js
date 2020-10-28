import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import { addMovieMutation, updateMovieMutation} from './mutation';
import { movieQuery } from '../MoviesTable/queries';
import { directorQuery } from './queries';

import { styles } from './styles';

const withGraphqlAdd = graphql( addMovieMutation, {
  props: ({mutate}) => ({
    addMovie: movie => mutate({
      variables: movie,
      refetchQueries: [{ query: movieQuery }]
    })
  })
})

const withGraphqlUpdate = graphql( updateMovieMutation, {
  props: ({mutate}) => ({
    updateMovie: movie => mutate({
      variables: movie,
      refetchQueries: [{ query: movieQuery }]
    })
  })
})


export default compose(withStyles(styles), withGraphqlAdd, withGraphqlUpdate, graphql(directorQuery));
