import React from 'react';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './utils/js/localStorage';
import thunk from 'redux-thunk';
import { rootReducer } from './store/reducer';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  return saveState({
    token: store.getState().token,
  });
});

export function App() {
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  );
}
