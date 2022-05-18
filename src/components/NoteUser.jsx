import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ME } from '../gql/query';
import DeleteNote from './DeleteNote';
import FavoriteNote from './FavoriteNote';

const NoteUser = props => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <>
      <FavoriteNote
        me={data.me}
        noteId={props.note.id}
        favoriteCount={props.note.favoriteCount}
      >
        Favorites: {props.note.favoriteCount}
      </FavoriteNote>
      <br />
      {data.me.id === props.note.author.id && (
        <div>
          <Link to={`/edit/${props.note.id}`}>Edit</Link> <br />
          <DeleteNote noteId={props.note.id} />
        </div>
      )}
    </>
  );
};

export default NoteUser;
