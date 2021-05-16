import React from "react";
import { Route, Switch } from "react-router-dom";
import { Landing } from "./Landing";
import { Privacy } from "./Privacy";
import { Terms } from "./Terms";

export const PageRouter = () => {
  return (
    <Switch>
      <Route path="/privacy">
        <Privacy />
      </Route>
      <Route path="/terms">
        <Terms />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  );
};
