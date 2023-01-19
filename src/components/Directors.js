import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  {  directors.map((director,index)=>(
        <ul key={index}>
          {director.name}
          <li>{director.movies}</li>
        </ul>
      ))}
  </div>;
}

export default Directors;
