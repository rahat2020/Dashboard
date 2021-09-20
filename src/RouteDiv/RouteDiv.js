import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ManageGroup from "../ManageGroup/ManageGroup";
import ManageUser from "../ManageUser/ManageUser";
const RouteDiv = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/manage-user`}>
          <ManageUser/>
        </Route>
        <Route exact path={`${path}/manage-group`}>
          <ManageGroup/>
        </Route>
      </Switch>
    </div>
  );
};

export default RouteDiv;
