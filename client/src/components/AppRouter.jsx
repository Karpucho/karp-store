import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { PAGE_PATHS } from '../utils/constants';
import { Context } from '../index';

export const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <Switch>
      {user?.isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      <Redirect to={PAGE_PATHS.shop} />
    </Switch>
  );
};
