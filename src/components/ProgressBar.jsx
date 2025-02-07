import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./css/ProgressBar.css";

const ProgressBar = ({ progress, icon, skill }) => {
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds (same as progress bar)
    const intervalTime = duration / progress;

    const interval = setInterval(() => {
      start += 1;
      setDisplayedProgress(start);
      if (start >= progress) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="progressComp">
      <div className="topCont">
        <img src={`./Skills/${icon}`} alt="" />
        <div>{`${displayedProgress} %`}</div>
      </div>
      <div className="progress-container">
        <motion.div
          className="progress-bar"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 2, delay: 0 }}
        />
      </div>
      <div className="bottomCont">{skill}</div>
    </div>
  );
};

export default ProgressBar;
