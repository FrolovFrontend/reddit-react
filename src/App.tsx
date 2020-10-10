import React, { useState } from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header/';
import { useToken } from './hooks/useToken';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { commentContext } from './context/commentContext';

export function App() {
  const [commentValue, setCommentValue] = useState('');
  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <Router>
      <tokenContext.Provider value={token}>
        <CommentProvider
          value={{
            value: commentValue,
            onChange: setCommentValue,
          }}
        >
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
        </CommentProvider>
      </tokenContext.Provider>
    </Router>
  );
}
