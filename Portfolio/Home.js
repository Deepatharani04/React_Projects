import React from "react";
import './Home.css';
import Img from '../Images/image1.png';

function Home(){
    return(
        <>
        <div className="box-screen">
        <ul>
            <li className="navbar1">Home</li>
            <li className="navbar2">About</li>
            <li className="navbar3">Certificates</li>
            <li className="navbar4">Contact</li>
        </ul>
        </div>
        <h1 className="name">My Name is DEEPATHARANI </h1>
        </>
    );
}

export default Home;