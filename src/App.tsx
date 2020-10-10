import React from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header/';
import { useToken } from './hooks/useToken';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';

export function App() {
  const [token] = useToken();

  return (
    <Router>
      <tokenContext.Provider value={token}>
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
      </tokenContext.Provider>
    </Router>
  );
}
