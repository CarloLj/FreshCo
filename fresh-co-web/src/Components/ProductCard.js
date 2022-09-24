import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


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
    <Card>
      <Card.Img class="col-md-12 row" variant="top" src={ImagenUrl} />
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
