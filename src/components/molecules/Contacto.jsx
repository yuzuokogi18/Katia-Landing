
import React from "react";
import "./Contacto.css";
import { contactoData } from '../../data/Contacto';

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>{contactoData.title}</h2>
      <p>{contactoData.address}</p>
      <p>{contactoData.phone}</p>
      <p>{contactoData.email}</p>
      <p>{contactoData.note}</p>
    </div>
  );
}

export default Contacto;
