import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Link from '../pages/link/Link';
import InvalidLink from '../pages/invalid-link/InvalidLink';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/l/:id' exact component={Link} />
        <Route path='/invalid/link' exact  component={InvalidLink} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
