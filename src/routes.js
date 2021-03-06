import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MainPage from './pages/Main';
import Projects from './pages/Projects';

export default function Routes() {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={MainPage}/>
              <Route path="/projects" component={Projects}/>
          </Switch>
        </BrowserRouter>
    );
}
