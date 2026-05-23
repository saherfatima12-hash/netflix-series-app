 import { useState } from "react";
 import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import styles from "./Netflix.module.css";

 const NetflixSeries = () => {
  const [index,setIndex] = useState(0);

  const series = seriesData[index];

  const next = () => {
    if (index < seriesData.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return(
   <div className = {styles.bg}>
    
    { index > 0 && (
      <img
      src="rewind.png"
      className={styles["left_logo"]}
      onClick={prev}/>
    )}
     <SeriesCard key = {index} {...series} />
    
      {index < seriesData.length-1 && (
    <img
  src="forward.png"
  className={styles["right_logo"]}
  onClick={next}
  />
      )}
 </div>
  );
 };
export default NetflixSeries;