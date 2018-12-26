import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'typeface-poppins';

import AboutPage from './components/StaticPages/About';
import PrivacyPage from './components/StaticPages/Privacy';
import FaqPage from './components/StaticPages/faq';
import PartnerPage from './components/StaticPages/Partner';
import ErrorPage from './components/StaticPages/Error';

import App from './components/App';
import configureStore from './store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D51F1F'
    },
    secondary: {
      main: '#323232'
    },
    background: '#F8F8F8'
  },
  typography: {
    fontFamily: '"Poppins"',
    useNextVariants: true
  },
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1600,
      md: 1200,
      sm: 600,
      xs: 0
    }
  }
});

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/partner" component={PartnerPage} />
          <App />
          <Route component={ErrorPage} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
