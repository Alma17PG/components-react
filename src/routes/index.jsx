import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PlaygroundAlma from '../containers/PlaygroundAlma';
import PlaygroundRicardo from '../containers/PlaygroundRicardo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/alma" component={PlaygroundAlma} />
      <Route exact path="/ricardo" component={PlaygroundRicardo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
