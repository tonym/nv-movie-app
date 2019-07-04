/**
 * @file LoginView
 * @description This is the login view, which loads if there is no user in state
 * @author tm
 */

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
interface Props extends WithStyles<typeof styles> {};

const LoginView: React.FC<Props> = props => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
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
