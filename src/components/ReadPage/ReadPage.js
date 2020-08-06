import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { APIContext } from 'context';
import { Main } from './styled';

const ReadPage = () => {
  const { id } = useParams();
  const { state, readMessage } = useContext(APIContext);

  const onClickHandler = () => readMessage(id);

  if (state.getError) return <div>{JSON.stringify(state.getError)}</div>;

  if (state.getResponse) {
    return <div>{state.getResponse}</div>;
  }

  return (
    <Main>
      <button onClick={onClickHandler}>Read now</button>
    </Main>
  );
};

export default ReadPage;
