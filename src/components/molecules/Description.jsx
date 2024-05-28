import React from "react";
import "./Description.css";
import "../atoms/DescriptionText.jsx"
import DescriptionText from "../atoms/DescriptionText.jsx";
import DescriptionImg from "../atoms/DescriptionImg.jsx";

function Description() {
  return (
    <div className="description-container">
      <div className="description-text">
        <DescriptionText></DescriptionText>
      </div>
      <div className="description-image">
     <DescriptionImg></DescriptionImg>
      </div>
    </div>
  );
}

export default Description;
