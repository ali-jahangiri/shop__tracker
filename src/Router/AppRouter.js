import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages
import Dashboard from "../pages/Dashboard";
import NewFactor from "../pages/NewFactor";
import NotFound from "../pages/NotFound";
import ProductManager from "../pages/ProductManager";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/new-factor" component={NewFactor} />
      <Route path="/product" component={ProductManager} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
