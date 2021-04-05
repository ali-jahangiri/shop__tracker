import DashboardLastFactor from "../Components/DashboardLastFactor";
import PageHeader from "../Components/PageHeader";

const Dashboard = ({ history }) => {
  return (
    <div className="container">
      <div className="row">
        <PageHeader title="خانه" />
      </div>
      <div className="row dashboard">
        <div className="col-md-6">
          <div className="">
            <p className="dashboard__title">آخرین فاکتور ها</p>
            <DashboardLastFactor />
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Dashboard;
