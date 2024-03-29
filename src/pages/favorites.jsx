import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

import { GET_MY_FAVORITES } from '../gql/query';

export default function Favorites() {
  useEffect(() => {
    document.title = 'Favorites -- Notes';
  });

  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>No favorites yet</p>;
  }
  return (
    <div>
      <h1>Notedly</h1>
      <p>These are my favorites</p>
    </div>
  );
}
