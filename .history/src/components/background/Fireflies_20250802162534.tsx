import React from "react";
import "./fireflies.scss";
const Fireflies: React.FC = () => {
  const quantity = 10;

  return (
    <>
      {Array.from({ length: quantity }, (_, i) => {
        const bit = Math.random() < 0.5 ? "0" : "1"; // randomly choose 0 or 1
        return (
          <div className="firefly" key={i}>
            {bit}
          </div>
        );
      })}
    </>
  );
};

/*
  return (
    <>
      {Array.from({ length: quantity }, (_, i) => (
        <div className="firefly" key={i} />
      ))}
    </>
  );
};*/

export default Fireflies;
