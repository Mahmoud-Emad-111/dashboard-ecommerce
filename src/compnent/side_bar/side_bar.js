import React from "react";
import "./side_bar.css";
import {  Link } from "react-router-dom";
import { useState } from "react";
const Side_bar=(props)=>{

    return(
        <div className={`side_bar ${props.color==false ? 'dark': '' }`} id="side_bar" >
            <div className="hedaer">
                <div className="close" id="close" onClick={props.handel_side}>x</div>
                <span><Link to="/" >lamadmin</Link ></span>
            </div>
            <hr/>
            <div className="main">
            <ul>
                        <p>main</p>
                    <li>
                        <i className="fa-solid fa-table-cells-large"></i>
                        <span><Link to="/">dashboard</Link></span>
                    </li>
                        <p>lists</p>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <span><Link to="/user">user</Link></span>
                    </li>
                    <li>
                        <i className="fa-solid fa-shop"></i>
                        <span><Link to="/product">product</Link></span>
                    </li>
                    <li>
                        <i className="fa-solid fa-address-card"></i>
                        <span><Link to="/order">order</Link></span>
                    </li>
                    <li>
                        <i className="fa-solid fa-truck"></i>
                        <span><Link to="/order">delevere</Link></span>
                    </li>
                        <p>useful</p>
                    <li>
                        <i className="fa-solid fa-arrows-up-down"></i>
                        <span>stats</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-bell"></i>
                        <span>notfications</span>
                    </li>
                        <p>service</p>
                    <li>
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                        <span>system health</span>
                    </li>
                    <li>
                        <i className="fa-solid fa-hand-fist"></i>
                        <span>logs</span>

                    </li>
                    <li>
                        <i className="fa-solid fa-gear"></i>    
                        <span>setings</span>
                    </li>
                        <p>user</p>
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <span><Link to="/profile">profile</Link></span>
                    </li>
                    <li>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>logout</span>
                    </li>

                </ul>
                <div className="moods_color" onClick={props.handel_color}>
                    <div className="mood">
                        
                    </div>
                    <div className="mood" onClick={ props.handel_color}>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Side_bar;