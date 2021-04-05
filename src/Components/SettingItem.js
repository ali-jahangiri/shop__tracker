const SettingItem = ({ children, title, actionHandler, ctaText, ctaIcon }) => {
  return (
    <div className="setting col-md-12">
      <div className="d-flex flex-column text-right">
        <p className="setting__title">{title}</p>
        {children}
      </div>
      <button className="setting__cta">
        {ctaIcon}
        <span onClick={actionHandler}>{ctaText} </span>
      </button>
    </div>
  );
};

export default SettingItem;
