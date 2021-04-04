import { BrowserRouter, Route, Switch } from "react-router-dom";

// HOC
import WithNavigation from "../HOC/WithNavigation";

// pages
import Dashboard from "../pages/Dashboard";
import FactorCompleted from "../pages/FactorCompleted";
// import FactorHistory from "../pages/FactorHistory";
import NewFactor from "../pages/NewFactor";
import NotFound from "../pages/NotFound";
import ProductManager from "../pages/ProductManager";
import ScheduleCalender from "../pages/Schedule";
import Setting from "../pages/Setting";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <WithNavigation>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/new-factor/:id" component={FactorCompleted} />
          <Route path="/new-factor" component={NewFactor} />
          <Route path="/product" component={ProductManager} />
          <Route path="/schedule" component={ScheduleCalender} />
          <Route path="setting" component={Setting} />
          <Route component={NotFound} />
        </Switch>
      </WithNavigation>
    </BrowserRouter>
  );
};

export default AppRouter;
