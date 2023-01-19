import React from "react";
import { actors } from "../data";

function Actors() {
  return <>{/*{code here}*/}
    <h1>Actors Page</h1>
  {
      actors.map((actor,index)=>(
        <div key={index}>
          {actor.name}
          <ul>
            <li>{actor.movies}</li>
          </ul>
    </div>
      ))}
  </>;
}

export default Actors;
