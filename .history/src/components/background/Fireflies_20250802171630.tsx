import React from "react";
import "./fireflies.scss";
const Fireflies: React.FC = () => {
  const quantity = 100;

  return (
    <>
      {Array.from({ length: quantity }, (_, i) => {
        const bit = Math.random() < 0.5 ? "0" : "1";
        return <div className="firefly" data-char={bit} key={i} />;
      })}
    </>
  );
};

export default Fireflies;
