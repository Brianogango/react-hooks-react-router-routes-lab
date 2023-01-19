import React from "react";
import { directors } from "../data";

function Directors() {
  return <>{/*{code here}*/}
    <h1>Directors Page</h1>
  {  directors.map((director,index)=>(
    
      <div>
      <h2 key={index}>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => {
          return (
            <li>{movie}</li>
          )
        })}
          
        </ul>
      </div>
          
      ))}
  </>;
}

export default Directors;
