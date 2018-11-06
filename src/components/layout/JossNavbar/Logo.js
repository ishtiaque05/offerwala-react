import React from 'react';
import logoImageLink from 'assets/images/jossdeals_logo.png';

const Logo = () => {
  return (
    <div>
      <img
        src={logoImageLink}
        alt="Jossdeals Logo"
        style={{ height: '40px' }}
      />
    </div>
  );
};

export default Logo;
