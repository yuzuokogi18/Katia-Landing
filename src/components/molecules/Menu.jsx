import React from "react";
import "./Menu.css";
import { menuData } from '../../data/Menu';
import ImageMenu from "../atoms/ImageMenu";
import TextMenu from "../atoms/TextMenu";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-grid">
        {menuData.map((item, index) => (
          <div key={index} className="menu-item">
            <ImageMenu SRC={item.image}></ImageMenu>
            
           <TextMenu text={item.name}></TextMenu>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;