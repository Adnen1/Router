import React from "react";
import {Link} from "react-router-dom"

function NavBar({showModal}){
    return(
        <div className='nav-bar'>
            <Link to='./'><h3>Home</h3></Link>
            <button onClick={() => showModal(true)}>Add</button>

        </div>
    )
}
export default NavBar