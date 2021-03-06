import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import SearchResultsGrid from '../../components/SearchResultsGrid';
import { SearchState } from '../../store/search';

const styles = (theme: Theme) => createStyles({
  root: {
  },
  circularProgress: {
    display: 'block',
    margin: 'auto',
  },
});

interface Props extends WithStyles<typeof styles> {
  query?: string;
  search?: SearchState;
};

const Search: React.FC<Props> = props => {

  const { classes, query, search } = props;

  return (
    <div className={classes.root}>
      {
        search!.isFetching ?
        <CircularProgress className={classes.circularProgress} color="secondary" /> :
        <React.Fragment>
          <Typography variant="h3">{query}</Typography>
          <Typography gutterBottom variant="subtitle1">returned <strong>{search!.searchResults.total_results}</strong> results</Typography>
          <SearchResultsGrid searchResults={search!.searchResults} />
        </React.Fragment>
      }
    </div>
  );

}

export default withStyles(styles)(Search);
