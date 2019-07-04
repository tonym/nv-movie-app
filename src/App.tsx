/**
* @file App
* @description Main application file
* @author tm
*/

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import routeConstants from './constants/routeConstants';
import Header from './components/Header';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import { AppState } from './store';

/**
 * MUI theme starts with the default theme, which is a light theme.
 * Pass an argument to createMuiTheme to override default styles.
 * Here the light, default theme, is set to dark.
 * Details on theme customization are here:
 * https://material-ui.com/customization/themes/
 * The default theme object can be inspected here:
 * https://material-ui.com/customization/default-theme/
 */
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

/**
 * Private routes require some sort of authentication.
 * Usually this is a result of auth against a domain endpoint
 * Here it's just pretend. There is no real auth, it's simulated
 * by using a login view to collect a user's name, then
 * adding it to state. If there is a user in state, private
 * routes can load. If not, the login view will appear.
 */
const PrivateRoute = ({ component: Component, authed, ...rest }: any) => (

  <Route {...rest} render={(props) => (
      authed
      ? <Component {...props} />
      : <Redirect to={{
          pathname: routeConstants.LOGIN,
          state: { from: props.location }
        }} />
  )} />

);

const App: React.FC<AppState> = props => {

  const { user } = props.auth;

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
          <Header user={user} />
            <Switch>
              <PrivateRoute path={routeConstants.ROOT} exact component={HomeView} />
              <Route path={routeConstants.LOGIN} component={LoginView} authed={user} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

function mapStateToProps(state: AppState) {
  return state;
}

export default connect(mapStateToProps)(App);
