import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: Theme) => createStyles({
  root: {

  }
});

const Header: React.FC = (props: any) => {

  const { classes } = props;

  return (
    <AppBar className={classes.root} position='fixed' color='primary'>
      <Toolbar>
        <Typography color="inherit" variant="h5">I am an appbar</Typography>
      </Toolbar>
    </AppBar>
  );

}

export default withStyles(styles)(Header);
