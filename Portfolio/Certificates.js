import React from "react";
import cer1 from './cert1.png';
import cer2 from './cert2.png';
import cer3 from './cert3.png';
import './Certificate.css';

function Certificates(){
    return(
        <>
    <div className="horizontal-images-container">
        <div className="image-wrapper">
        <img src={cer1} className="hover-image" />
        <div className="hover-text">Java </div>
      </div>
      <div className="image-wrapper">
        <img src={cer2} className="hover-image" />
        <div className="hover-text">HTML,CSS<br/>JAVASCRIPT </div>
      </div>
      <div className="image-wrapper">
        <img src={cer3} className="hover-image" />
        <div className="hover-text">HTML,CSS</div>
      </div>
    </div>
        </>
    );
}

export default Certificates;