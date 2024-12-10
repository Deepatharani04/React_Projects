import React from "react";
import Img from '../Images/image12.png';
import './About.css';

function About(){
    return(
        <>
        <div className="box-screen">
        <h3 className="about-text">I'm pursuring my bachelor's degree in Information Technology at the KG College of Arts and Science and My Goal is to become a hacker and my hobbies are reading books, listening music and exploring new Technology.</h3>
        <img src={Img} width={300} height={150} className="myimg"/>
        </div>
        </>
    );
}

export default About;