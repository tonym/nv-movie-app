/**
 * @file Header
 * @description Global page Header
 * @author tm
 */

import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import SearchForm, { Values } from '../../forms/SearchForm';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {

  },
  avatar: {
    margin: 10,
  },
});

/**
 * Type interface, use an interface instead of PropTypes
 * WithStyles allows us to stay DRY by using the styles object to keep it type safe
 */
interface Props extends WithStyles<typeof styles> {
  user: string;
  searchCallback?: (values: Values) => void;
};

const Header: React.FC<Props> = (props) => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
  const { classes, user, searchCallback } = props;

  const handleSearchCallback = (values: Values): void => {
    if(searchCallback) {
      searchCallback(values);
    }
  }

  return (
    <AppBar className={classes.root} position='fixed' color='primary'>
      <Toolbar>
        <Grid alignItems="center" container justify="space-between">
          <Grid item>
            <Typography color="inherit" variant="h5">Movie-O-Matic</Typography>
          </Grid>
          <Grid item>
            <Grid alignItems="center" container justify="flex-end">
              {
                user ?
                <Grid item>
                  <SearchForm callback={handleSearchCallback} searchBar={true} />
                </Grid> :
                null
              }
              {
                user ?
                <Hidden smDown>
                  <Grid item>
                    <Avatar alt="fake avatar" className={classes.avatar} src="/assets/images/avatar.jpg"></Avatar>
                  </Grid>
                  <Grid item>
                    <Typography color="inherit" variant="h6">
                      {user}
                    </Typography>
                  </Grid>
                </Hidden> :
                null
              }
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

}

export default withStyles(styles)(Header);
