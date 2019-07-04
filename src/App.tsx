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
import Header from './components/Header';
import routeConstants from './constants/routeConstants';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

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

const App: React.FC = (props: any) => {

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

function mapStateToProps(state: object) {
  return state;
}

export default connect(mapStateToProps)(App);
