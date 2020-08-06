import React, { useContext, useState } from 'react';
import { APIContext } from 'context';
import { Main } from './styled';

const NewPage = () => {
  const {
    state: { isLoading, postResponse, postError },
    sendMessage
  } = useContext(APIContext);

  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => setInputValue(e.currentTarget.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  if (postResponse) {
    const newLink = `${window.location.protocol}//${window.location.hostname}/read/${postResponse.key}`;

    return (
      <div>
        <a href={newLink}>{newLink}</a>
      </div>
    );
  }
  if (postError) return <div>{JSON.stringify(postError)}</div>;

  return (
    <Main>
      <form onSubmit={onSubmitHandler}>
        <label>Type your message</label>
        <div>
          <textarea value={inputValue} onChange={onChangeHandler} />
        </div>
        {isLoading ? (
          'Loading ...'
        ) : (
          <button type='submit'>Throw it in!</button>
        )}
      </form>
    </Main>
  );
};

export default NewPage;
