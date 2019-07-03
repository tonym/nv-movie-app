import React from 'react';
import { connect } from 'react-redux';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => createStyles({
  root: {
    paddingTop: theme.spacing(10),
  }
});

const LoginView: React.FC = (props: any) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      Login view
    </div>
  );

}

function mapStateToProps(state: object) {
  return state;
}

const styledComponent = withStyles(styles)(LoginView);

export default connect(mapStateToProps)(styledComponent);