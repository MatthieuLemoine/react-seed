import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import rootReducer  from '../root/root.reducer';

export default function configureStore() {
  // Load state from localStorage
  const middlewares = [thunkMiddleware];
  let enhancer;
  // Log actions and states in development mode
  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = require('redux-logger')();
    middlewares.push(loggerMiddleware);
    enhancer = compose(
      applyMiddleware(...middlewares),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
        window.devToolsExtension() : f => f
    );
  } else {
    enhancer = applyMiddleware(...middlewares);
  }

  const store = createStore(
    rootReducer,
    enhancer
  );

  return store;
}
