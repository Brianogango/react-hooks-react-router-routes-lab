import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{/*{code here}*/}
  {
      actors.map((actor,index)=>(
        
        <ul key={index}>
          {actor.name}
         <li>{actor.movies}</li> 
        </ul>
    
      ))}
  </div>;
}

export default Actors;
