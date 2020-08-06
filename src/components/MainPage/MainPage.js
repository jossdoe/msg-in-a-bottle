import React from 'react';
import { Main } from './styled';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
  const history = useHistory();

  const onClickHandler = (e) => {
    history.push('/new');
  };

  return (
    <Main>
      <button onClick={onClickHandler}>Create Msg</button>
    </Main>
  );
};

export default MainPage;
