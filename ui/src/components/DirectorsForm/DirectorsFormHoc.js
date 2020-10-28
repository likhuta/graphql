import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { graphql } from 'react-apollo';
import { addDirectorMutation, updateDirectorMutation} from './mutation';
import { directorQuery } from '../DirectorsTable/queries';

import { styles } from './styles';

const withGraphqlAdd = graphql( addDirectorMutation, {
  props: ({mutate}) => ({
    addDirector: director => mutate({
      variables: director,
      refetchQueries: [{ query: directorQuery }]
    })
  })
})

const withGraphqlUpdate = graphql( updateDirectorMutation, {
  props: ({mutate}) => ({
    updateDirector: director => mutate({
      variables: director,
      refetchQueries: [{ query: directorQuery }]
    })
  })
})

export default compose(withStyles(styles), withGraphqlAdd, withGraphqlUpdate);
