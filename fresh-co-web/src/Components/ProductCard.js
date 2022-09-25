import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Pages/Feed.css";

export default function ProductCard({
  Nombre,
  Precio,
  ImagenUrl,
  Tipo,
  Cantidad
}) 

{
  return (
    <div class ="relative flex flex-row h-36">
      <img class=" w-full md:w-24 h-24 rounded-t-lg md:rounded-full translate-x-6 translate-y-6" src={ImagenUrl} alt="" />
      
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        
        <div class="p-6 flex flex-col justify-start">
          <h3 class="text-gray-900 text-2xl font-medium mb-2 text-left -translate-y-3">{Nombre}</h3>
          <p class="text-gray-900 text-md font-medium mb-2 text-left translate-x-2 -translate-y-5">{Tipo}</p>

          <p class="  -translate-x-2 font-normal txt-xs translate-y-3 text-gray-600 text-base">Precio Total: {Precio} $ / Kg
            <p class=" whitespace-pre txt-xs inline-block text-gray-600 text-base">            Stock: {Cantidad} T</p></p>
          
        </div>
      </div>
      <button type="button" class=" text-4xl w-full md:w-12 h-12 -translate-x-6 translate-y-12  align-middle bg-green-500 text-white  uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">+</button>
    </div>
  );
}
