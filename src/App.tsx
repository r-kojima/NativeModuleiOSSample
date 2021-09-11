import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './store';
import * as theme from './theme';

// @ts-ignore
import Routes from 'src/navigation/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
