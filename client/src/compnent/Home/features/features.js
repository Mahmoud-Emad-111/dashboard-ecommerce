import React from "react";
import "./features.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./.import "~/node_modules/bootstrap/dist/css/bootstrap.min.css""
const Feature=() =>{
    return(
        <div className="feature ">
            <div className="top">
                <h3>total revenue</h3>
                <span><i class="fa-solid fa-caret-down"></i></span>
            </div>
            <div className="bottom">
                <div className="feature-ch">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={4}	/>
                </div>
                <div className="captch">
                        <span>total sales made today</span>
                        <span >$420</span>
                        <span>pervious transactions processing last payments may not be included</span>
                </div>
                <div className="Planning">
                        <div>
                            <span>target</span>
                            <span className="negtive"><i class="fa-solid fa-angle-down" ></i> $12.4k</span>
                        </div>
                        <div>
                            <span>last week</span>
                            <span className="postive"><i class="fa-solid fa-angle-up " ></i> $16.7k</span>
                        </div>
                        <div>
                            <span>last month</span>
                            <span className="postive"><i class="fa-solid fa-angle-up postive" ></i> $9.9k</span>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Feature;