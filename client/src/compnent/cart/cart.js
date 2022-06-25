import React from "react";
import "./cart.css"
const Cart=(props)=>{
    let data;
    switch (props.type) {
        case "users":
            data={
                title:"users",
                ismoney:false,
                count:100,
                link:"see all users",
                icone:<i className="fa-regular fa-user icone" style={{
                    color:"crimson",
                    backgroundColor:"rgba(255,0,0,0.2)"
                    }}></i>,
            }
            break;
            case "orders":
                data={
                    title:"orders",
                    ismoney:false,
                    count:109,
                    link:"view all orders",
                    icone:<i className="fa-solid fa-cart-shopping icone " style={{
                        color:"goldenrod",
                        backgroundColor:"rgba(218,165,32,0.2)"
                    }}></i>,
                    
                }
            break;
            case "earnings":
                data={
                    title:"earnings",
                    ismoney:true,
                    count:652,
                    link:"view net earnings",
                    icone:<i className="fa-solid fa-circle-dollar-to-slot icone" style={{
                        color:"green",
                        backgroundColor:"rgba(0,128,0,0.2)"
                    }}></i>,
                    
                }
            break;

            case "balance":
                data={
                    title:"balance",
                    ismoney:true,
                    count:502,
                    link:"see detalis",
                    icone:<i className="fa-solid fa-wallet icone" style={{
                        color:"purple",
                        backgroundColor:"rgba(128,0,128,0.2)"
                    }}></i>,
                    
                }
            break;
    
        default:
            break;
    }
    return(
        <div className="widget">
            
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="count"> {data.ismoney && "$"} {data.count}</span>
                    <span className="detalis">{data.link}</span>
                </div>
                <div className="right">
                    <span className="up"><i className="fa-solid fa-angle-up"></i> 20 %</span>
                    <span>{data.icone}</span>
                </div>

            
        </div>
    )
}
export default Cart;