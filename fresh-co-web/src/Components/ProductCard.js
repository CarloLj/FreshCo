import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Pages/Feed.css";

export default function ProductCard({
  Nombre,
  Precio,
  ImagenUrl,
  Descripcion,
  CantidadPrecioKilos,
  CantidadExistenteKilos,
}) 

{
  return (
    <Card style={{ width: '24rem' }}>
        <Card.Img variant= "top" src={ImagenUrl} class="img-fluid" alt="Responsive image" />
        <Card.Body>
          <Card.Title>{Nombre}</Card.Title>
          <Card.Text>{Descripcion}</Card.Text>
          <Card.Text>
            Precio = ${Precio} por {CantidadPrecioKilos} Kilos. Quedan{" "}
            {CantidadExistenteKilos} de kilos de este producto.
          </Card.Text>
          <Button variant="primary">+</Button>
        </Card.Body>
    </Card>
  );
}
