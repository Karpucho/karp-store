import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../utils/routes';
import { PAGE_PATHS } from '../utils/constants';
import { Context } from '../index';

export const AppRouter = () => {
  const { user } = useContext(Context);
  const myUser = { ...user };
  myUser.isAuth = true;

  return (
    <Switch>
      {myUser?.isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      {/* {user?.isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)} */}
      {publicRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}
      <Redirect to={PAGE_PATHS.shop} />
    </Switch>
  );
};
