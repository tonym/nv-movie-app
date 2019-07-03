/**
* @file App
* @description Main application file
* @author tm
*/

import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

const PrivateRoute = ({ component: Component, ...rest }: any) => (

  <Route {...rest} render={(props) => (

    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />

);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="app">
            <Switch>
              <PrivateRoute path="/" exact component={HomeView} />
              <Route path="/login" component={LoginView} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
