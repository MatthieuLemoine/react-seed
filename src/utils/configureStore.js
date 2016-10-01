import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import createLogger  from 'redux-logger';
import rootReducer  from '../root/root.reducer';

export default function configureStore() {
  // Load state from localStorage
  const middlewares = [thunkMiddleware];
  // Log actions and states in development mode
  if (process.env.NODE_ENV !== 'production') {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store;
}
