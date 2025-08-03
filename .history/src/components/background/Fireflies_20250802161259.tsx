const Fireflies: React.FC = () => {
  const quantity = 15;

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
