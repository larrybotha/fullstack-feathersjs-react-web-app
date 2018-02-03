import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {Button, Form, Message} from 'semantic-ui-react';

import * as actions from '../../actions/user';

class LoginForm extends Component {
  static initialState = {
    email: '',
    password: '',
  };

  state = this.initialState;

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value.trim(),
    });
  };

  handleSubmit = e => {
    const {login} = this.props;
    const {email, password} = this.state;
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  render() {
    const {email, password} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            name="email"
            defaultValue={email}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <label>password</label>
          <input
            name="password"
            type="password"
            defaultValue={password}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  login: actions.login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
