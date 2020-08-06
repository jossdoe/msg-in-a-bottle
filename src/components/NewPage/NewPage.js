import React from 'react';
import { Main } from './styled';

const NewPage = () => (
  <Main>
    <form>
      <label>Type your message</label>
      <div>
        <textarea />
      </div>
      <button>Throw it in!</button>
    </form>
  </Main>
);

export default NewPage;
