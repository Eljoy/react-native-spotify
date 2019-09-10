import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ApiProvider, ApiService } from './services';
import { AppThemeProvider } from './theme';
import { AppContainer } from './navigation';
import { AppStatusBar } from './components';

const App = () => (
  <Provider store={store}>
    <AppThemeProvider>
      <ApiProvider value={ApiService}>
        <AppStatusBar />
        <AppContainer />
      </ApiProvider>
    </AppThemeProvider>
  </Provider>
);

export default App;
