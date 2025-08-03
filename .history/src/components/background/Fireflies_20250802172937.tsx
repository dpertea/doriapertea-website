import React, { useEffect, useState } from "react";
import "./fireflies.scss";

const Fireflies: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const quantity = 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

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
