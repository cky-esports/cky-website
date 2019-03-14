import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { LogoBase } from '../shared';

const Logo = () => (
  <Link to="/">
    <Typography component="h1">
      <LogoBase height={60} />
    </Typography>
  </Link>
);

export default Logo;
