/**
 * @file Search
 * @description Wrapper for SearchResults
 * @author tm
 */

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { SearchState } from '../../store/search';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {
  },
  circularProgress: {
    display: 'block',
    margin: 'auto',
    paddingTop: theme.spacing(10),
  },
});

/**
 * Type interface, use an interface instead of PropTypes
 * WithStyles allows us to stay DRY by using the styles object to keep it type safe
 */
interface Props extends WithStyles<typeof styles> {
  search?: SearchState;
};

const Search: React.FC<Props> = props => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
  const { classes, search } = props;

  return (
    <div className={classes.root}>
      {
        search!.isFetching ?
        <CircularProgress className={classes.circularProgress} color="secondary" /> :
        <div>search results</div>
      }
    </div>
  );

}

export default withStyles(styles)(Search);
