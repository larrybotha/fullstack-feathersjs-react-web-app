import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {Button, Form, Message} from 'semantic-ui-react';

import {addUser} from '../../actions/user';

class SignupForm extends Component {
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
    const {addUser} = this.props;
    const {email, password} = this.state;
    e.preventDefault();

    addUser({
      email,
      password,
    });
    this.setState(this.initialState);
  };

  render() {
    const {email, password} = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
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
  addUser,
};

export default connect(null, mapDispatchToProps)(SignupForm);
