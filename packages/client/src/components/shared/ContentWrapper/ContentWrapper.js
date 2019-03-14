import React from 'react';
import styled from 'styled-components';
import { theme } from 'client-misc';

console.log(theme); // Returns undefined

const StyledContentWrapper = styled.div`
  /*padding: 0px ${theme.spacing.unit * 3}px;

  ${theme.breakpoints.up('sm')} {
    padding: 0px ${theme.spacing.unit * 6}px;
  }

  ${theme.breakpoints.up('md')} {
    padding: 0px ${theme.spacing.unit * 10}px;
  }*/
  color: red;
`;

const ContentWrapper = props => <StyledContentWrapper {...props} />;

export default ContentWrapper;
