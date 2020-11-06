import React from 'react';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { useToken } from './hooks/useToken';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());

export function App() {
  const [token] = useToken();
  const TokenProvider = tokenContext.Provider;

  return (
    <Router>
      <Provider store={store}>
        <TokenProvider value={token}>
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
        </TokenProvider>
      </Provider>
    </Router>
  );
}
