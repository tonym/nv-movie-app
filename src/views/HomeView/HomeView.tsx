import React from 'react';
import { connect } from 'react-redux';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { AppState, ConnectedReduxProps } from '../../store';
import { getSearchResults } from '../../store/search';

const styles = (theme: Theme) => createStyles({
  root: {
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingTop: theme.spacing(20),
  },
});

interface Props extends WithStyles<typeof styles> {}

type AllProps = Props &
  ConnectedReduxProps;

const HomeView: React.FC<AllProps> = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      Home view
    </div>
  );

}

function mapStateToProps(state: AppState) {
  return state;
}

const mapDispatchToProps = {
  getSearchResults,
}

const styledComponent = withStyles(styles)(HomeView);

export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);
