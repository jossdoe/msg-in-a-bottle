import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from 'components/MainPage';
import NewPage from 'components/NewPage';
import ReadPage from 'components/ReadPage';

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <Switch>
        <Route path='/read/:id'>
          <ReadPage />
        </Route>
        <Route path='/new'>
          <NewPage />
        </Route>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route>
          <div>404 - Page not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
