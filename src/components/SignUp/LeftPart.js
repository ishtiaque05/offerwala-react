import React from 'react';
import logo from '../../assets/images/jossdeals_logo.png';

const styles = {
  wrapper: {
    backgroundColor: '#F9F9F9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
};

const LeftPart = () => (
  <div style={styles.wrapper}>
    <img src={logo} alt="logo" />
  </div>
);

export default LeftPart;
