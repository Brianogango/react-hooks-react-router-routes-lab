import React from "react";
import { movies } from "../data";

function Movies() {
  return <>{/*{code here}*/}
  <h1>Movies Page</h1>
     {
      movies.map((movie,index)=>(
        <div key={index}>
          <h3>"Name:"{movie.title}</h3>
          <h4>"Time:" {movie.time}</h4>
          <ul>Genres
            {movie.genres.map((genre, index) => {
              return (
                <li key={index}>{ genre}</li>
              )
            })}
             </ul>
        </div>
      ))}
  
  </>;
}

export default Movies;
