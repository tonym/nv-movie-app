import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => createStyles({
  root: {
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingTop: theme.spacing(20),
  }
});

interface Props extends WithStyles<typeof styles> {};

const LoginView: React.FC<Props> = props => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Typography align="center">Login form goes here</Typography>
      </Grid>
    </div>
  );

}

export default withStyles(styles)(LoginView);
