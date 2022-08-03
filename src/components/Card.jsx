import React from "react";
import ".//Card.css";
import img1 from "../c.png";
import {Link} from 'react-router-dom'
 function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
                <img scr= {img1} alt="LOGO of programming " className="card_img"/>
                <div className="card_info">
                    <h3 className="card_title">{props.title}</h3>
                    <p>{props.para}</p>
                    <a href={props.link} >
                        <button>click here</button>
                        <Link className="button-bg-info " to="/About">Navbar</Link>
                            <button className="navbar-toggler" type="button" >
                             </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
 }
 export default Card