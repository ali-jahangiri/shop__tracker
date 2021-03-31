import { BrowserRouter, Route, Switch } from "react-router-dom";

// HOC
import WithNavigation from "../HOC/WithNavigation";

// pages
import Dashboard from "../pages/Dashboard";
import FactorCompleted from "../pages/FactorCompleted";
import NewFactor from "../pages/NewFactor";
import NotFound from "../pages/NotFound";
import ProductManager from "../pages/ProductManager";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <WithNavigation>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/new-factor/:id" component={FactorCompleted} />
          <Route path="/new-factor" component={NewFactor} />
          <Route path="/product" component={ProductManager} />
          <Route component={NotFound} />
        </Switch>
      </WithNavigation>
    </BrowserRouter>
  );
};

export default AppRouter;
