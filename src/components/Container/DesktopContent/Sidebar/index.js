import React, { Fragment } from 'react';
import Categories from './Categories';
import SocialIcons from './SocialIcons';
import AddtionalPages from './AddtionalPages';

const Sidebar = () => (
  <Fragment>
    <Categories />
    <SocialIcons />
    <AddtionalPages />
  </Fragment>
);

export default Sidebar;
