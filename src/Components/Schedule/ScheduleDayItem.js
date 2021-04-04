import { useHistory } from "react-router";

const ScheduleDayItem = ({
  index,
  hashColor,
  id,
  personalInfo: { name },
  additionalInfo: { priority },
}) => {
  const history = useHistory();
  const clickHandler = () => history.push(`/new-factor/${id}`);
  return (
    <div
      style={{ borderRightColor: `${hashColor}` }}
      className="scheduleDayItem"
    >
      <p className="scheduleDayItem__index">{index}</p>
      <p>{name}</p>
      <div>
        <p> : شناسه </p> <p> {id} </p>
      </div>
      <div>
        <p> : اولویت </p> <p>{priority}</p>
      </div>
      <button onClick={clickHandler}>مشاهده</button>
    </div>
  );
};

export default ScheduleDayItem;
