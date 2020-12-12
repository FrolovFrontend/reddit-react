import React from 'react';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/auth">
              <Home/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}
