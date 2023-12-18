import React from "react";
import checkIcon from "../../assets/images/icon-check.svg";

const List = () => {
  return (
    <div>
      <ul>
        <li className="flex items-center">
          <img src={checkIcon} alt="checkIcon" className="h-fit" />
          <p className="ml-2">Unlimited websites</p>
        </li>
        <li className="flex items-center">
          <img src={checkIcon} alt="checkIcon" className="h-fit" />
          <p className="ml-2">100% data ownership</p>
        </li>
        <li className="flex items-center">
          <img src={checkIcon} alt="checkIcon" className="h-fit" />
          <p className="ml-2">Email reports</p>
        </li>
      </ul>
    </div>
  );
};

export default List;
