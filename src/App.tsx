import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import * as theme from './theme';

// @ts-ignore
import Routes from 'src/navigation/Routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
