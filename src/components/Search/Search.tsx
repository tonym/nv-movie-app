/**
 * @file Search
 * @description Wrapper for SearchResults
 * @author tm
 */

import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { SearchResults } from '../../store/search';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingTop: theme.spacing(20),
  }
});

/**
 * Type interface, use an interface instead of PropTypes
 * WithStyles allows us to stay DRY by using the styles object to keep it type safe
 */
interface Props extends WithStyles<typeof styles> {
  searchResults?: SearchResults;
};

const Search: React.FC<Props> = props => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
  const { classes, searchResults } = props;

  console.log(searchResults!.results);

//  console.log(results.hasOwnProperty('results') ? results.results : 'no results');

  return (
    <div className="root">
      Search Results
    </div>
  );

}

export default withStyles(styles)(Search);
