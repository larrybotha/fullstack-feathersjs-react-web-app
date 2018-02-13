import {h} from 'preact';
import {Link} from 'react-router-dom';

import {Divider, Header, Container} from 'semantic-ui-react';

import NavBar from './NavBar';

// this is the main layout component that wraps routes
// Overkill, but we're passing all state down to whatever component is a child
const Main = ({render, ...restProps}) => (
  <Container>
    <Header as="h1" textAlign="center">
      <NavBar />
    </Header>

    <Divider />

    {render({...restProps})}
  </Container>
);

export default Main;
