import React from "react";
import Card from "react-bootstrap/Card";
import "../Pages/Details.css"


export default function ProductCard({
  Nombre,
  Locacion,
  ImagenUrl,
  Descripcion,
  Rating
}) 

{
  return (
    <div>
        
        <img src={ImagenUrl} alt="PlaceHolder" className="ImgPlot"></img>
            <div className="cardProduct">
                <h2>{Nombre}</h2>
                <h4>{Locacion}</h4>
                <h6>{Descripcion}</h6>
                <div className="rating">
                    <h6 className="a">Rating </h6>
                    <h6 className="b">{Rating} / 5</h6>
                </div>
            </div>
    </div>
    
  );
}
