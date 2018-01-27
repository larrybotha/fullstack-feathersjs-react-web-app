import {h, Component} from 'preact';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}
