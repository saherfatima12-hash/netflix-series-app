const SeriesCard = ({img,name,stars,rating,year,duration,summary,starring,director,playlink,playbtn,watchbtn})=>{
   
   return(
    <div className = "black-box">
      <img src ={img} className = "box_image" />
      <div className = "content">
      <h1 className = "Title">{name}</h1>

     <div className ="row">
      <div className = "Star">{stars}</div>
      <div className = "meta">
      <span><h3>({rating})</h3></span>
      <span><h3>{year}</h3></span>
      <span><h3>{duration}</h3></span>
       </div>  
     </div>

      <p className ="Summary">{summary}</p>
      <div className="starring-row">
       <span className="label">Starring:</span>
       <span className="text">{starring}</span>
      </div>

      <div className="starring-row">
       <span className="label">Director :</span>
       <span className="text">{director}</span>
       </div>
       <div className="buttons">
      <button
       className="play-btn"
       onClick={() => window.location.href = playlink}>
    {playbtn}
     </button>
       <button className="watch-btn">{watchbtn}</button>
      </div>
      </div>
      </div>
   );
};
export default SeriesCard;