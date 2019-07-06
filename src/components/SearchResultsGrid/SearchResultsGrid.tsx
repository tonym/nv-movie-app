/**
 * @file Header
 * @description Global page Header
 * @author tm
 */

import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { SearchResults } from '../../store/search';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {

  }
});

/**
 * Type interface, use an interface instead of PropTypes
 * WithStyles allows us to stay DRY by using the styles object to keep it type safe
 */
interface Props extends WithStyles<typeof styles> {
  searchResults: SearchResults;
};

const SearchResultsGrid: React.FC<Props> = (props) => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
  const { classes } = props;

  return (
    <div className={classes.root}>
      Search results
    </div>
  );

}

export default withStyles(styles)(SearchResultsGrid);
