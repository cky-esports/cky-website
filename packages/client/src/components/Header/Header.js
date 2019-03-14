import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { useSpring, animated, config } from 'react-spring';
import Logo from './Logo';

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Logo />
    </Toolbar>
  </AppBar>
);

export default Header;
