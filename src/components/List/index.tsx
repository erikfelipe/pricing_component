import React from "react";
import checkIcon from "../../assets/images/icon-check.svg";

const List = () => {
  return (
    <div>
      <ul>
        <div>
          <li className="flex">
            <img src={checkIcon} alt="checkIcon" className="h-fit" />
            <p>Unlimited websites</p>
          </li>
          <li>
            <img src={checkIcon} alt="checkIcon" className="h-fit" />
            <p>100% data ownership</p>
          </li>
          <li>
            <img src={checkIcon} alt="checkIcon" className="h-fit" />
            <p>Email reports</p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default List;
