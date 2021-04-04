const PageHeader = ({ title, primaryText }) => {
  return (
    <div className="row page__header">
      <div className="col-12">
        <p>
          {title}{" "}
          {primaryText && (
            <span className="page__header--primary">{primaryText}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
