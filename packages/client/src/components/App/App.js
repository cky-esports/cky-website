import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import reducer, { initialState } from 'client-redux';
import { theme } from 'client-misc';
import GlobalStyle from './GlobalStyle';
import AppInner from './AppInner';

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

const App = () => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <AppInner />
    </MuiThemeProvider>
  </ReduxProvider>
);

export default App;
