import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

import { useQuery, gql } from '@apollo/client';
import { Link, withRouter } from 'react-router-dom';
import ButtonAsLink from './ButtonAsLink';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
  font-family: var(--font-family1);
  color: var(--primary-color);
  @media (max-width: 467px) {
    font-size: 1.4em;
  }
`;

const UserState = styled.div`
  margin-left: auto;
`;

const Header = () => {
  const { data, client } = useQuery(IS_LOGGED_IN);

  return (
    <HeaderBar>
      <img class="header-logo" src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Notedly</LogoText>

      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              localStorage.removeItem('token');

              client.resetStore();

              client.writeData({ data: { isLoggedIn: false } });

              props.history.push('/');
            }}
          >
            Log out
          </ButtonAsLink>
        ) : (
          <p>
            <Link className="navigable-link" to={'/signin'}>
              Sign In{' '}
            </Link>
            <Link className="navigable-link" to={'/signup'}>
              Sign up
            </Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default withRouter(Header);
