import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, #cky-app-target {
    height: 100%;
  }

  #cky-app-target {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &.loaded {
      overflow-y: auto;
    }
    &.stretch {
      width: 100vw;
    }
  }
`;
