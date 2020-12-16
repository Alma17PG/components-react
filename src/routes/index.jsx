import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PlaygroundAlma from '../containers/PlaygroundAlma';
import PlaygroundCarlos from '../containers/PlaygroundCarlos';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/alma" component={PlaygroundAlma} />
      <Route exact path="/carlos" component={PlaygroundCarlos} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
