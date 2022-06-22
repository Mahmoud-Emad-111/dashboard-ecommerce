import React from "react";
import "./Nav_bar.css";
import me from "./ma.jpg";
import {  Link } from "react-router-dom";

const Nav_bar=(props)=>{
    
    return(
        <div className={`nav ${props.color==false ? 'dark' : ''}`}>
            <div className="contener_nav">
                    
                        
                    <div className="right">
                        
                            
                            <i className="fa-solid fa-bars" onClick={props.handel_side}></i>
                                    

                    </div>
                <div className="option">
                    <ul>
                        <li className="lan">
                            <i className="fa-solid fa-globe"></i>
                            <span>english</span>
                        </li>
                        <li onClick={props.handel_color}><i className="fa-regular fa-moon"></i></li>
                        <li><i className="fa-solid fa-minimize"></i></li>
                        <li><i className="fa-regular fa-bell"></i></li>
                        <li><i className="fa-regular fa-message"></i></li>
                        <li><Link to="/profile"><img src={me} alt=""/></Link></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
export default Nav_bar;