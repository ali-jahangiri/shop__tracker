const PageHeader = ({ title }) => {
  return (
    <div className="row page__header">
      <div className="col-12">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PageHeader;
