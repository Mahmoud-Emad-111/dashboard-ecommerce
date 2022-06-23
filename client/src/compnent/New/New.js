import React from "react";
import Nav from "./../nav_bar/Nav_bar";
import Site from "./../side_bar/side_bar";
import "./New.css";
import { useEffect, useState } from "react";

import avatar from "./avtart.jpg";
import "~/node_modules/font-awesome/css/font-awesome.min.css";
const New=()=>{
    const [file, setfile] = useState(false);
    const [type,settype]=useState("");
    const handel_password=()=>{
        settype(!type)
    }
    return(
        <div className="new">
            <div className="site"><Site/></div>
            <div className="contener">
                <Nav/>
                <div className="top">
                    <h1>add new user</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file): avatar} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="form">
                                <div className="input_form">
                                    <label htmlFor="file"> image: <i className="fa-solid fa-upload"></i></label>
                                    <input type="file"  id="file" onChange={e=>setfile(e.target.files[0])} style={{display:"none"}}/>
                                </div>
                                <div className="input_form">
                                    <label>Username</label>
                                    <input type="text"  placeholder="User Name"/>
                                </div>
                                <div className="input_form">
                                    <label>FullName</label>
                                    <input type="text"  placeholder="FullName"/>
                                </div>
                                <div className="input_form">
                                    <label>Email</label>
                                    <input type="email"  placeholder="Enter is Email"/>
                                </div>
                                <div className="input_form">
                                    <label>Phone</label>
                                    <input type="numper"  placeholder="+20"/>
                                </div>
                                <div className="input_form password">
                                    <label>Password</label>
                                    <input type={type==true ? 'text': "password" }  placeholder="Password" id="password"/>
                                    <i class="fa-regular fa-eye" onClick={handel_password}></i>
                                </div>
                                <div className="input_form">
                                    <label>Address</label>
                                    <input type="text"  placeholder="Address"/>
                                </div>
                                <div className="input_form">
                                    <label>Country</label>
                                    <input type="text"  placeholder="country"/>
                                </div>
                                <button>sent</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New;