/**
 * @file Header
 * @description Global page Header
 * @author tm
 */

import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SearchResults } from '../../store/search';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {

  },
  table: {

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
  const { classes, searchResults } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Release date</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            searchResults!.results!.map(result => {
              return (
                <TableRow key={result.title}>
                  <TableCell component="th" scope="row">{result.title}</TableCell>
                  <TableCell>{result.release_date}</TableCell>
                  <TableCell>{result.overview}</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );

}

export default withStyles(styles)(SearchResultsGrid);
