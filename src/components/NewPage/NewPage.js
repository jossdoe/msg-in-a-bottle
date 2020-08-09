import React, { useContext, useState } from 'react';
import { APIContext } from 'context';
import Header from 'components/Header';
import { Main, MainSuccess, MainError } from './styled';
import { ReactComponent as TypewriterSVG } from 'assets/typewriter.svg';
import { ReactComponent as WavesSVG } from 'assets/waves.svg';
import { ReactComponent as ErrorSVG } from 'assets/explosion.svg';
import { confessions } from 'data';

const NewPage = () => {
  const {
    state: { isLoading, postResponse, postError },
    resetState,
    sendMessage
  } = useContext(APIContext);
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => setInputValue(e.currentTarget.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
    setInputValue('');
  };

  if (postResponse) {
    const newLink = `${window.location.protocol}//${window.location.hostname}/read/${postResponse?.key}`;

    const onClickHandler = () => resetState();

    return (
      <>
        <Header SVG={WavesSVG} />
        <MainSuccess>
          your message is in the waves:
          <br />
          <a href={newLink}>{newLink}</a>
          <br />
          <button onClick={onClickHandler}>Write another one</button>
        </MainSuccess>
      </>
    );
  }

  if (postError) {
    console.error(postError);
    const onClickHandler = () => resetState();

    return (
      <>
        <Header SVG={ErrorSVG} />
        <MainError>
          <strong>your typewriter exploded</strong>
          <br />
          something went wrong. we are very sorry.
          <br />
          <button onClick={onClickHandler}>Try again</button>
        </MainError>
      </>
    );
  }

  return (
    <>
      <Header SVG={TypewriterSVG} />
      <Main>
        <form onSubmit={onSubmitHandler}>
          <label>type your msg</label>
          <textarea
            value={inputValue}
            onChange={onChangeHandler}
            rows='7'
            placeholder={
              confessions[Math.floor(Math.random() * confessions.length)]
            }
          />
          {isLoading ? (
            'Loading ...'
          ) : (
            <button type='submit'>put in bottle</button>
          )}
        </form>
      </Main>
    </>
  );
};

export default NewPage;
