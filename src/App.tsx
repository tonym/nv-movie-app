import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import routeConstants from './constants/routeConstants';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import { AppState } from './store';

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

const App: React.FC<AppState> = props => {

  const { user } = props.auth;

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <Switch>
              <PrivateRoute path={routeConstants.ROOT} exact component={HomeView} authed={user} />
              <Route path={routeConstants.LOGIN} component={LoginView} />
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProps = (state: AppState) => {
  return state;
}

export default connect(mapStateToProps)(App);
