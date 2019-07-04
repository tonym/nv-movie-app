/**
 * @file Header
 * @description Global page Header
 * @author tm
 */

import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

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
  user?: string;
};

const Header: React.FC<Props> = (props) => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
  const { classes, user } = props;

  return (
    <AppBar className={classes.root} position='fixed' color='primary'>
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
          {
            user ?
            <Typography color="inherit" variant="h5">I am an appbar</Typography> :
            <Typography color="inherit" variant="h5">Login</Typography>
          }
          </Grid>
          <Grid item>
            {
              user ?
              <Typography color="inherit" variant="h5">Search goes here</Typography> :
              null
            }
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

}

export default withStyles(styles)(Header);
