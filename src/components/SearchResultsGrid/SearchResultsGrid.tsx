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

const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing(3.5),
    width: '100%',
  },
  table: {
    minWidth: 800,
  },
  tableCell: {
    minWidth: 160,
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      minWidth: 240,
    },
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

interface Props extends WithStyles<typeof styles> {
  searchResults: SearchResults;
};

const SearchResultsGrid: React.FC<Props> = (props) => {

  const { classes, searchResults } = props;

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Title</TableCell>
              <TableCell className={classes.tableCell}>Release date</TableCell>
              <TableCell className={classes.tableCell}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              searchResults!.results!.map(result => {
                return (
                  <TableRow key={result.title}>
                    <TableCell component="th" scope="row">{result.title}</TableCell>
                    <TableCell className={classes.tableCell}>{result.release_date}</TableCell>
                    <TableCell>{result.overview}</TableCell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </div>
    </Paper>
  );

}

export default withStyles(styles)(SearchResultsGrid);
