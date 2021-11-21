import React from "react";
import { Link } from "react-router-dom";
import S from "./land.module.css"

export default function LandingPage() {

  return (
    <div className={S.background}>
      <Link to="/Home" className={S.link} >
        <h1 className={S.text}>Welcome!</h1>
      </Link>
      <img className={S.image} alt = "imagen1"src= {'./imagenes/razas_background.jpg'}/>
    </div>
  );
}
