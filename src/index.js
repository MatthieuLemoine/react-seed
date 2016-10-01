import { render } from 'react-dom';
import Root  from './root/Root';
import configureStore  from './utils/configureStore';

const store = configureStore();

// Render initial state
render(
  <Root store={store} />,
  document.getElementById('root')
);
