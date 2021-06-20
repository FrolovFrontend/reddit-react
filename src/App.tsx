import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { useEffect, useState } from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'store/reducer';

import { Layout } from 'components/Layout';
import { Header } from 'components/Header';
import { HomePage } from 'pages/HomePage';
import { PostsPage } from 'pages/PostsPage';
import { PostPage } from 'pages/PostPage';
import { NoMatch } from 'pages/NoMatch';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (store.getState().loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header/>
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? <Redirect to="/posts/"/> : <HomePage/>}
            </Route>
            <Route path="/auth/">
              {isLoggedIn ? <Redirect to="/posts/"/> : <HomePage/>}
            </Route>
            <Route exact path="/posts/">
              {!isLoggedIn ? <Redirect to="/"/> : <PostsPage/>}
            </Route>
            <Route exact path="/posts/:id">
              <PostPage/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
