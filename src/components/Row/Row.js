import React, { useState, useEffect, useRef} from "react";
import "./Row.css";
import movieTrailer from 'movie-trailer'
import Youtube from "react-youtube"
function Row({ title, movie }) {
  const [movies, setMovies] = useState([]);
  const [videoUrl,setVideoUrl] = useState("")
    const rowContainerRef = useRef()

    const arrowClick = (direction) =>{

      if(direction === "left"){
        rowContainerRef.current.scrollLeft-= window.innerWidth
      }else{
        rowContainerRef.current.scrollLeft+= window.innerWidth
      }
      
    }

    const getMovies = (movieName) =>{
      const getTitle = movieName?.title ? movieName.title : movieName.name


      if(videoUrl){
        setVideoUrl("")
      }else{
        movieTrailer(getTitle).then( url =>{
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(url)
          setVideoUrl(urlParams.get("v"))
        }).catch(error => console.log(error))

      }
     

    }

  useEffect(async () => {
    await fetch(movie)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);




 const videoStyles = {
    width:"100%",
    height:"450px",
  }
  return (
    <div className="row-main-container">
      <h1 style={{color:"white"}}> {title}</h1>

      <div className="row-container" ref={rowContainerRef}>
        <div className="row-container-arrow left" onClick={(e) =>arrowClick("left")}></div>
        {movies.length> 2 ? movies.map((singleMovie) =>{
          const image = `https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`
          return(
            <div key={singleMovie.id} className="row-image-container"> 
              <img src={image} className="row-movie-image" draggable={false} onClick={() =>getMovies(singleMovie)}/>
            </div>
          )
        }):""}
        <div className="row-container-arrow right" onClick={(e) =>arrowClick("right")}></div>
      </div>
      {videoUrl ? < Youtube videoId={videoUrl} opts={videoStyles} /> : ""}

    </div>
  );
}

export default Row;



