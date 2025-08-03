import React from "react";
import "./fireflies.scss";

const Fireflies: React.FC = () => {
  const quantity = 15;

  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        <div className="firefly" key={i} />
      ))}
    </>
  );
};

export default Fireflies;
