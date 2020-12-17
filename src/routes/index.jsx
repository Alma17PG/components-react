import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PlaygroundAlma from '../containers/PlaygroundAlma';
import PlaygroundRicardo from '../containers/PlaygroundRicardo';
import PlaygroundCarlos from '../containers/PlaygroundCarlos';
import UnicoDetergente from '../containers/UnicoDetergente';
import PlaygroundCesar from '../containers/PlaygroundCesar';
import PlaygroundMichell from '../containers/PlaygroundMichell';
import ComponenteBoton from '../components/componenteBoton/ComponenteBoton';
import PlaygroundEdgar from '../containers/PlaygroundEdgar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/alma" component={PlaygroundAlma} />
      <Route exact path="/ricardo" component={PlaygroundRicardo} />
      <Route exact path="/carlos" component={PlaygroundCarlos} />
      <Route exact path="/martin" component={UnicoDetergente} />
      <Route exact path="/cesar" component={PlaygroundCesar} />
      <Route exact path="/michell" component={PlaygroundMichell} />
      <Route exact path="/componenteBoton" component={ComponenteBoton} />
      <Route exact path="/edgar" component={PlaygroundEdgar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
