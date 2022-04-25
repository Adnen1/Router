import Search from "./components/Search"
import React from "react";
import './App.css';
import { useState } from "react";
import {data} from "./data/Data";
import List from "./components/movieList";
import AddMovie from "./components/addMovie";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchMovie from "./components/filter";
import {Routes,Route} from "react-router-dom"
import NavBar from "./components/navBar";
import WatchTrailer from "./components/direction";

function App() {
  const [movie,setMovie]=useState( data)
  const [nameSearch, setNameSearch] = useState('');
  const [show, setIsShow] = useState(false)

  return (

    <div className="App">
     <NavBar showModal={setIsShow}/>
     <AddMovie show={show} setIsShow={setIsShow} saveMovie={setMovie} />
 <SearchMovie setNameChange={setNameSearch}/>
 <Routes>
   <Route path="" element={<List movie={movie} nameSearch={nameSearch}/>}/>
   <Route path="/watchtrailer/:id" element={<WatchTrailer movie={movie} />} />
 </Routes>
    </div>
  );
}

export default App;
