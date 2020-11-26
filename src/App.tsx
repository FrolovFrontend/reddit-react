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

const store = createStore(rootReducer, composeWithDevTools());

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
