
import React from "react";
import Carde from "./movieCard"
import "./movieList.css"
function List({movie,nameSearch}){
    return(
    <div className="list">
{
    movie.filter(
        el =>
          el.name.toLowerCase().includes(nameSearch))
          .map((el,i)=><Carde el={el} key={i}/>    )
}
</div>
    )
}
export default List