/**
 * @file LoginView
 * @description This is the login view, which loads if there is no user in state
 * @author tm
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { AppState, ConnectedReduxProps } from '../../store';
import { login } from '../../store/auth';
import LoginForm from '../../forms/LoginForm';
import routeConstants from '../../constants/routeConstants';

/**
 * Styles for HTML elements, and any child component overrides
 */
const styles = (theme: Theme) => createStyles({
  root: {
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    paddingTop: theme.spacing(20),
  },
  caption: {
    paddingTop: theme.spacing(2),
  },
  card: {
    maxWidth: theme.spacing(60),
    width: '100%',
  },
});

/**
 * Type interface, use an interface instead of PropTypes
 * WithStyles allows us to stay DRY by using the styles object to keep it type safe
 */
interface Props extends WithStyles<typeof styles> {
  app: AppState;
};

interface Values {
  [index: string]: string;
  user: string | '';
  password: string | '';
}

interface PropsFromDispatch {
  login: typeof login;
}

type AllProps = Props &
  ConnectedReduxProps &
  PropsFromDispatch &
  RouteComponentProps<{}>;

const LoginView: React.FC<AllProps> = props => {

  /**
   * the styles from above are added to the component props
   * by the HOC 'withStyles' as 'classes'
   */
  const { classes, history } = props;

  const loginFormCallback = async (values: Values) => {
    props.login(values.user);
    history.push(routeConstants.ROOT);
  }

  return (
    <div className={classes.root}>
      <Grid alignItems="center" container direction="column" justify="center">
        <Card className={classes.card}>
          <CardHeader title="Login" titleTypographyProps={{align: 'center'}} />
          <CardContent>
            <LoginForm callback={loginFormCallback} />
          </CardContent>
        </Card>
        <Typography className={classes.caption} paragraph variant="caption">
          This is not a real login.
          Enter whatever you like.
          It's just a way to get a username so we can pretend it's a real app.
        </Typography>
      </Grid>
    </div>
  );

}

const mapDispatchToProps = {
  login
}

const styledComponent = withStyles(styles)(LoginView);

export default withRouter(connect(undefined, mapDispatchToProps)(styledComponent));
