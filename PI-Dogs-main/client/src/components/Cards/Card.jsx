import React from "react";
import { Link } from "react-router-dom";
import S from "./card.module.css";

export default function Card(props) {

  return (
    <Link to={`/Details/${props.id}`} className={S.card}>
      <div>
        <div className={S.bodyCard}>
          { props.image?
          <img alt= "#"  src={props.image} className={S.image} />:
          <img alt= "otraimagen" src='#' className={S.image} />
        }
          
        </div>

        <h4 className={S.names}>{props.name}</h4>
        <p className={S.temp}>
          { props.temperament
            ? typeof props.temperament[0] === "object"
              ? props.temperament.map((e) => {
                  return e.name + " ";
                })
              : props.temperament.map((e) => {
                  return e + " ";
                })
            : "Not fount"}
        </p>
      </div>
    </Link>
  );
}
