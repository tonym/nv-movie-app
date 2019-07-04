import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => createStyles({
  root: {
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingTop: theme.spacing(20),
  }
});

const LoginView: React.FC = (props: any) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Typography align="center">Login form goes here</Typography>
      </Grid>
    </div>
  );

}

function mapStateToProps(state: object) {
  return state;
}

const styledComponent = withStyles(styles)(LoginView);

export default connect(mapStateToProps)(styledComponent);
