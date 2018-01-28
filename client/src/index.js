import {h, Component} from 'preact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import store, {history} from './store';

import 'semantic-ui-css/semantic.css';

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Route path="/" component={App} />
        </BrowserRouter>
      </Provider>
    );
  }
}
