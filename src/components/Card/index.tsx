import React from "react";
import "./style.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-white flex flex-col items-center rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;
