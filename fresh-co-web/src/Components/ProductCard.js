import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Pages/Feed.css";

export default function ProductCard({
  Nombre,
  Precio,
  ImagenUrl,
  Descripcion,
  Rating
}) 

{
  return (
    <div>
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={ImagenUrl} alt="" />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{Nombre}</h5>
          <p class="text-gray-700 text-base mb-4">
            {Descripcion}
          </p>
          <p class="text-gray-600 text-base">Precio Total: {Precio} $</p>
        </div>
      </div>
    </div>
  );
}
