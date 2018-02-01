import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {Button, Form, Message} from 'semantic-ui-react';

import * as actions from '../../actions/user';

class SignupForm extends Component {
  static initialState = {
    username: '',
    password: '',
  };

  state = this.initialState;

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value.trim(),
    });
  };

  handleSubmit = e => {
    const {addUser} = this.props;
    const {username, password} = this.state;
    e.preventDefault();

    addUser({
      username,
      password,
    });
    this.setState(initialState);
  };

  render() {
    const {username, password} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            defaultValue={username}
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
  adduser: actions.addUser,
};

export default connect(null, mapDispatchToProps)(SignupForm);
