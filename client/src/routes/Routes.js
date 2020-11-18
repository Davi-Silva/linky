import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';
import Link from '../pages/link/Link';
import InvalidLink from '../pages/invalid-link/InvalidLink';
import Account from '../pages/account/Account';
import AccountLinks from '../pages/account/links/Links';
import ResetPassword from '../pages/reset-password/ResetPassword';
import CreateShortenedLink from '../pages/create-shortened-link/CreateShortenedLink';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/l/:id' exact component={Link} />
        <Route path='/invalid/link' exact  component={InvalidLink} />
        <Route path='/account' exact  component={Account} />
        <Route path='/account/links' exact  component={AccountLinks} />
        <Route path='/reset-password/:id' exact  component={ResetPassword} />
        <Route path='/create' exact  component={CreateShortenedLink} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
