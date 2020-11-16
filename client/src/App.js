import { Provider } from 'react-redux';
import store from './store/index';

import Routes from './routes/Routes';

import './styles/App.css';

const App = () => {
  return (
    <Provider store={store()}>
      <Routes />
    </Provider>
  );
}

export default App;
