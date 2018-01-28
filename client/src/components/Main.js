import {h, Component} from 'preact';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Header, Container} from 'semantic-ui-react';
import * as actions from '../actions/recipes';

const Main = ({render, ...restProps}) => (
  <Container>
    <Header as="h1" textAlign="center">
      <Link to="/">Menu monkey</Link>

      {render({...restProps})}
    </Header>
  </Container>
);

const mapStateToProps = ({recipes}) => ({recipes});

const mapDispatchToProps = {...actions};

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
