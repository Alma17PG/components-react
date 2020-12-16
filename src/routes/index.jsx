import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PlaygroundAlma from '../containers/PlaygroundAlma';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/alma" component={PlaygroundAlma} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
