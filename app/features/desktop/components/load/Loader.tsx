import { useEffect, useState } from 'react';

const Loader = () => {
  const [left, setLeft] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
      setLeft((prev) => prev + 8);
    }, 600);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="load-screen-loader">
      <div style={{ left: `${left}%` }} className="load-bar-container">
        <div className="load-screen-loader-bar bar-1"></div>
        <div className="load-screen-loader-bar bar-2"></div>
        <div className="load-screen-loader-bar bar-3"></div>
      </div>
    </div>
  );
};
export default Loader;
