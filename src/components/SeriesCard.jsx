import styles from "./Netflix.module.css";
const SeriesCard = ({img,name,stars,rating,year,duration,summary,starring,director,playlink,playbtn,watchbtn})=>{
   
   return(
   
  <div className={styles["black-box"]}>
    
    <img src={img} className={styles["box_image"]} />

    <div className={styles["content"]}>
      
      <h1 className={styles["Title"]}>{name}</h1>

      <div className={styles["row"]}>
        
        <div className={styles["Star"]}>{stars}</div>

        <div className={styles["meta"]}>
          <span><h3>({rating})</h3></span>
          <span><h3>{year}</h3></span>
          <span><h3>{duration}</h3></span>
        </div>

      </div>

      <p className={styles["Summary"]}>{summary}</p>

      <div className={styles["starring-row"]}>
        <span className={styles["label"]}>Starring:</span>
        <span className={styles["text"]}>{starring}</span>
      </div>

      <div className={styles["starring-row"]}>
        <span className={styles["label"]}>Director :</span>
        <span className={styles["text"]}>{director}</span>
      </div>

      <div className={styles["buttons"]}>
        
        <button
          className={styles["play-btn"]}
          onClick={() => window.location.href = playlink}
        >
          {playbtn}
        </button>

        <button className={styles["watch-btn"]}>
          {watchbtn}
        </button>

      </div>

    </div>
  </div>

   );
};
export default SeriesCard;