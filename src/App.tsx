import React from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header/';
import { useToken } from './hooks/useToken';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export function App() {
  const [token] = useToken();

  return (
    <Router>
      <Layout>
        <Header token={token} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/auth">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
