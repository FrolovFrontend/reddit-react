import React from 'react';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserContextProvider } from './context/userContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';
import { loadState, saveState } from './utils/js/localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  return saveState({
    token: store.getState().token,
  });
});

export function App() {
  return (
    <Router>
      <Provider store={store}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/auth">
                <Home />
              </Route>
            </Switch>
          </Layout>
        </UserContextProvider>
      </Provider>
    </Router>
  );
}
