import { Provider } from 'react-redux';

const Root = ({ store }) =>
  <Provider store={store}>
  </Provider>;

Root.propTypes = {
  store : React.PropTypes.object.isRequired
};

export default Root;
