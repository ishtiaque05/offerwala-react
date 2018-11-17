import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import 'typeface-open-sans';

import Root from 'Root';
import App from 'components/App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D51F1F'
    },
    secondary: {
      main: grey['900']
    },
    background: '#F9F9F9'
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arian", sans-serif'
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
