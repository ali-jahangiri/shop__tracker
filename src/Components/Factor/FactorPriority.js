import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFactorPriority } from "../../Store/slices/newFactorSlice";

import makeLocalRef from "../../utils/makeLocalRef";

const FactorPriority = () => {
  const savedPriority = useSelector(
    (state) => state.newFactor.additionalInfo.priority
  );

  // states
  const [priority, setPriority] = useState(savedPriority);
  const [wasClicked, setWasClicked] = useState(false);
  const [currentSelectedCount, setCurrentSelectedCount] = useState(
    savedPriority
  );

  const boxes = new Array(5).fill("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSelectedCount) dispatch(setFactorPriority(currentSelectedCount));
  }, [currentSelectedCount, dispatch]);

  // handlers
  const mouseLeaveHandler = () => {
    if (currentSelectedCount) setPriority(currentSelectedCount);
    else if (!wasClicked) setPriority(1);
  };

  const selectionHandler = (i) => {
    setPriority(i);
    setCurrentSelectedCount(priority);
    setWasClicked(true);
  };

  const mouseMoveHandler = (i) => setPriority(i);

  return (
    <div className="priority">
      <div className="priority__container" onMouseLeave={mouseLeaveHandler}>
        <div
          style={{ width: `${priority * 2}0%` }}
          className="priority__divider"
        ></div>
        {boxes.map((_, i) => (
          <div
            onMouseMove={() => mouseMoveHandler(i)}
            onClick={() => selectionHandler(i)}
            className={`priority__box priority__box__${++makeLocalRef(i).ref} ${
              priority === ++makeLocalRef(i).ref ? "priority__box--active" : ""
            } `}
            key={i}
          >
            <p>{++i}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactorPriority;
