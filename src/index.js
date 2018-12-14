import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import 'typeface-open-sans';
import 'typeface-raleway';
import 'typeface-source-sans-pro';
import 'typeface-poppins';

import Root from './Root';
import App from './components/App';

import AboutPage from './components/StaticPages/About';
import FaqPage from './components/StaticPages/faq';
import PrivacyPage from './components/StaticPages/Privacy';

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
    fontFamily: '"Poppins"'
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

render(
  <Root>
    <Router>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/about" component={ AboutPage } />
          <Route path="/faq" component={ FaqPage } />
          <Route path="/privacy" component={ PrivacyPage } />
          <App />
        </Switch>
      </MuiThemeProvider>
    </Router>
  </Root>,
  document.getElementById('root')
);
