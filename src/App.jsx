import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ConfigProvider} from "antd";
import locale from 'antd/lib/locale/ru_RU';
import Dashboard from "./containers/Dashboard";
import {RouteWrapper} from "./components/Route";
import {Login} from "./containers/Login";
import {DashLayout} from "./DashLayout";

// cr - create route
const cr = (path, component, annotation = null, exact = true) => ({
  exact,
  path: "/" + path,
  component,
  // annotation: ENDPOINTS_CONSTANTS[annotation],
});
export const routes = [
  {
    exact: false,
    layout: DashLayout,
    subRoutes: [
      cr('dashboard', Dashboard, null, false),
    ]
  },
  {
    exact: false,
    layout: DashLayout,
    subRoutes: [
      {
        path: "/login",
        isPublic: true,
        component: Login
      }
    ]
  }
];

const App = () => (
  <ConfigProvider locale={locale}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.exact}
              path={route.subRoutes.map(r => r.path)}
            >
              <route.layout>
                {route.subRoutes.map((subRoute, i) => (
                  <RouteWrapper
                    key={i}
                    {...subRoute}
                    Component={subRoute.component}
                  />
                ))}
              </route.layout>
            </Route>
          ))}
          <Route exact path='*'>
            <Redirect to='/login'/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>
);

export default App;
