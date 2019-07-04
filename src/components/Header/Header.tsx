import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';

interface props {
  classes: any;
  user?: string;
}

const styles = (theme: Theme) => createStyles({
  root: {

  }
});

const Header: React.FC<props> = (props) => {

  const { classes, user } = props;

  return (
    <AppBar className={classes.root} position='fixed' color='primary'>
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
          {
            user ?
            <Typography color="inherit" variant="h5">I am an appbar</Typography> :
            <Typography color="inherit" variant="h5">Login and find the perfect movie to watch</Typography>
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
