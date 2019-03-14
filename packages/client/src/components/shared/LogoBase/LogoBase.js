import React from 'react';
import styled, { css } from 'styled-components';
import logoSrc from 'client-assets/images/logo.png';

// eslint-disable-next-line jsx-a11y/alt-text
const StyledLogoBase = styled(({ height, marginAuto, inline, ...others }) => <img {...others} />)`
  ${({ inline }) =>
    inline
      ? css`
          display: inline-block;
          vertical-align: middle;
        `
      : css`
          display: block;
        `};
  ${({ height }) =>
    height &&
    css`
      height: ${height}px;
    `}
  ${({ marginAuto }) =>
    marginAuto &&
    css`
      margin: auto;
    `}
`;

const LogoBase = props => <StyledLogoBase src={logoSrc} alt="CKY - UK Logo" {...props} />;

LogoBase.defaultProps = {
  marginAuto: false,
  inline: false,
};

export default LogoBase;
