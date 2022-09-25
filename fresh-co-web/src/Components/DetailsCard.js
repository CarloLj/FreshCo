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
    <Card style={{ width: '18rem', }}>
        <Card.Img variant="top" src={ImagenUrl} />
            <Card.Body>
            <Card.Title>{Nombre}</Card.Title>
                <Card.Text>{Locacion}</Card.Text>
                <Card.Text>{Descripcion}</Card.Text>
                <div className="rating">
                    <h6 className="a">Rating </h6>
                    <h6 className="b">{Rating} / 5</h6>
                </div>
            </Card.Body>
    </Card>
    
  );
}
