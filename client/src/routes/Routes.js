import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../utils/protected.route';

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
        <ProtectedRoute path='/account' exact  component={Account} />
        <ProtectedRoute path='/account/links' exact  component={AccountLinks} />
        <ProtectedRoute path='/reset-password/:id' exact  component={ResetPassword} />
        <ProtectedRoute path='/create' exact  component={CreateShortenedLink} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
