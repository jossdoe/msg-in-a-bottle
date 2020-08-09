import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { APIContext } from 'context';
import Header from 'components/Header';
import { Main, MainText, CreateButton, APIText } from './styled';
import { ReactComponent as BottleSVG } from 'assets/bottle.svg';

const MainPage = () => {
  const { resetState } = useContext(APIContext);
  const history = useHistory();

  const onClickHandler = (e) => {
    resetState();
    history.push('/new');
  };

  return (
    <>
      <Header SVG={BottleSVG} />
      <Main>
        <MainText>
          send a message that will only ever be read
          <br /> by a single person of your choice once.
          <br /> then it will be destroyed. forever.
        </MainText>
        <CreateButton onClick={onClickHandler}>Create Msg</CreateButton>
        <APIText>
          powered by <a href='https://www.file.io/'>file.io</a> {'&'}{' '}
          <a href='https://www.icons8.com/'>icons8.com</a>
        </APIText>
      </Main>
    </>
  );
};

export default MainPage;
