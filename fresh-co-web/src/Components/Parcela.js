import React from "react";
import ProductCard from "./ProductCard";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

export default function Parcela({
  Nombre,
  Descripcion,
  ImagenUrl,
  Locacion,
  Productos,
}) {
  return (
    <Card>
      <Card.Body>
        <ListGroup horizontal>
          <ListGroup.Item>
            <ProductCard
              Nombre="Tomate"
              Precio="20"
              ImagenUrl="https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
              Descripcion="Tomate verde organico"
              CantidadPrecioKilos="1"
              CantidadExistenteKilos="100"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <ProductCard
              Nombre="Tomate"
              Precio="20"
              ImagenUrl="https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
              Descripcion="Tomate verde organico"
              CantidadPrecioKilos="1"
              CantidadExistenteKilos="100"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <ProductCard
              Nombre="Tomate"
              Precio="20"
              ImagenUrl="https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
              Descripcion="Tomate verde organico"
              CantidadPrecioKilos="1"
              CantidadExistenteKilos="100"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            <ProductCard
              Nombre="Tomate"
              Precio="20"
              ImagenUrl="https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
              Descripcion="Tomate verde organico"
              CantidadPrecioKilos="1"
              CantidadExistenteKilos="100"
            />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
