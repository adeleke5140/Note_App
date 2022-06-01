import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Layout from '../components/Layout';

import Home from './home';

const MyNotes = lazy(() => import('./mynotes'));
const Favorites = lazy(() => import('./favorites'));
const SignUp = lazy(() => import('./signup'));
const SignIn = lazy(() => import('./signin'));
const NotePage = lazy(() => import('./note'));
const NewNote = lazy(() => import('./new'));
const EditNote = lazy(() => import('./edit'));

import { IS_LOGGED_IN } from '../gql/query';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/mynotes" component={MyNotes} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <PrivateRoute path="/new" component={NewNote} />
          <PrivateRoute path="/edit/:id" component={EditNote} />
          <Route path="/note/:id" component={NotePage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Suspense>
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default Pages;
