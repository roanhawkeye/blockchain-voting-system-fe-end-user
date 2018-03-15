import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DefaultLayout from './../DefaultLayout';
import Home from './../Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <DefaultLayout exact path="/" component={Home} />
      <Route path="*" exact render={() => <div>Page not found</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
