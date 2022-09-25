import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Pages/Feed.css";
import { Link } from 'react-router-dom';

export default function ProductCard({
  Nombre,
  Precio,
  ImagenUrl,
  Descripcion,
  CantidadExistenteKilos,
  IdParcela
}) 

{
  return (
    <div class ="relative flex flex-row h-36 sm:shrink-0">
      <img class=" w-full sm:w-24 h-24 rounded-t-lg sm:rounded-full translate-x-6 translate-y-6" src={ImagenUrl} alt="" />
      
      <div class="flex flex-col sm:flex-row sm:max-w-xl rounded-lg bg-white shadow-lg">
        
        <div class="p-6 flex flex-col justify-start">
          <h3 class="text-gray-900 text-2xl font-medium mb-2 text-left -translate-y-3">{Nombre}</h3>
          <p class="text-gray-900 text-sm font-medium mb-2 text-left translate-x-2 -translate-y-5">{Descripcion}</p>

          <p class="  -translate-x-2 font-normal txt-xs translate-y-3 text-gray-600 text-base">Precio Total: {Precio} $ / Kg
            <p class=" whitespace-pre txt-xs inline-block text-gray-600 text-base">                       Stock: {CantidadExistenteKilos} T</p></p>
          
        </div>
      </div>
      <Link to={"/Details/" + IdParcela}>
        <button type="button" class="text-center text-xl w-full sm:w-12 h-12 -translate-x-6 translate-y-12 bg-green-500 text-white  uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">+</button>
      </Link>
    </div>
  );
}
