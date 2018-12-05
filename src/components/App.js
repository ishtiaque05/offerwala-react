import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import JossNavbar from '../components/JossNavbar';
import Container from '../components/Container';

const App = () => (
  <div style={{ background: '#F8F8F8' }}>
    <CssBaseline />
    <JossNavbar />
    <Container />
  </div>
);

export default App;
