import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import 'typeface-open-sans';
import 'typeface-raleway';
import 'typeface-source-sans-pro';

import Root from './Root';
import App from './components/App';

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
    fontFamily: '"Source Sans Pro"'
  }
});

console.log(theme);

render(
  <Root>
    <Router>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Root>,
  document.getElementById('root')
);
