import React from 'react';

import Categories from 'components/layout/LeftSidebar/Categories';

const styles = {
  sidebar: {
    position: 'absolute', 
    left: 0, 
    top: '64px', 
    width: '250px', 
    height: '100%', 
    paddingTop: '80px'
  }
}

const LeftSidebar = () => (
  <div style={ styles.sidebar }>
    <Categories />
  </div>
);

export default LeftSidebar;
