import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { AppState, ConnectedReduxProps } from '../../store';
import { getSearchResults } from '../../store/search';
import Header from '../../components/Header';
import Search from '../../components/Search';
import SearchForm, { Values } from '../../forms/SearchForm';

const styles = (theme: Theme) => createStyles({
  root: {

  },
  content: {
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingTop: theme.spacing(12),
  },
  form: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: theme.spacing(80),
    width: '100%',
  }
});

interface Props extends WithStyles<typeof styles> {}

interface PropsFromDispatch {
  getSearchResults: typeof getSearchResults;
}

type AllProps = Props &
  AppState &
  PropsFromDispatch &
  ConnectedReduxProps;

const HomeView: React.FC<AllProps> = props => {

  const { classes, search } = props;
  const { user } = props.auth;
  const { isFetching, query, searchResults } = search;

  const handleSearchCallback = (values: Values): void => {
    props.getSearchResults(values.query);
  }

  return (
    <div className="root">
      <Header searchCallback={handleSearchCallback} user={user} />
      <div className={classes.content}>
        {searchResults.hasOwnProperty('results') || isFetching ?
          <Search query={query} search={search} /> :
          <div className={classes.form}>
            <Typography align="center" gutterBottom variant="h4">
              Let's get started
            </Typography>
            <SearchForm callback={handleSearchCallback} searchBar={false} />
          </div>
        }
      </div>
    </div>
  );

};

const mapStateToProps = (state: AppState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    getSearchResults,
  },
  dispatch);
};

const styledComponent = withStyles(styles)(HomeView);

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
