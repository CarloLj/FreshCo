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
    <div class="text-center flex flex-row w-2/6">
      <img
        src="https://images.squarespace-cdn.com/content/v1/61a6c189699860277d86f44c/1655567052649-1J920SI5C5KCXHP5KA44/image-asset.jpeg"
        class="rounded-full sm:w-32 h-32 mb-4 mx-auto translate-y-4 "
        alt="Avatar"
      />
      <div class="translate-y-5">
        <h5 class="text-xl font-medium leading-tight mb-2">{Nombre}</h5>
        <p class="text-gray-500">{Locacion}</p>
        <p class="text-gray-500">{Descripcion}</p>
      </div>
      
    </div>
    
  );
}
