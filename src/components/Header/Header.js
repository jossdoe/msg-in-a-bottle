import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Logo, LogoText } from './styled';

const Header = ({ SVG }) => {
  return (
    <Container>
      <Logo>
        <SVG />
      </Logo>
      <Switch>
        <Route exact path='/'>
          <LogoText>
            <header>msg</header>
            <aside>in a bottle</aside>
          </LogoText>
        </Route>
      </Switch>
    </Container>
  );
};

export default Header;
