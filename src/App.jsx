import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PageRouter } from "./pages/Root";

export const App = () => {
  return (
    <BrowserRouter>
      <Route component={PageRouter} />
    </BrowserRouter>
  );
};
