import DashboardLastFactor from "../Components/DashboardLastFactor";
import PageHeader from "../Components/PageHeader";
import DashboardTotal from "../Components/ِDashboardTotal";

const Dashboard = ({ history }) => {
  return (
    <div className="container">
      <div className="row">
        <PageHeader title="خانه" />
      </div>
      <div className="row dashboard">
        <div className="col-md-6">
          <p className="dashboard__title">آخرین فاکتور ها</p>
          <DashboardLastFactor />
        </div>
        <div className="col-md-6">
          <p className="dashboard__title">آخرین آمار دریافتی</p>
          <DashboardTotal />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
