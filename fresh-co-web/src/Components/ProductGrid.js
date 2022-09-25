import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GridCards from './ProductCard';

export default function ProductCard({
  Nombre,
  Precio,
  ImagenUrl,
  Descripcion,
  Cantidad
}) 

{
  return (
    <section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <GridCards          
            Nombre = "Tomate"
            Tipo = "Sierreño"
            Precio = "20"
            Cantidad = "21"
            ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>
        </div>
      </div>

      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
        <GridCards          
            Nombre = "Tomate"
            Tipo = "Sierreño"
            Precio = "20"
            Cantidad = "21"
            ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
        <GridCards          
            Nombre = "Tomate"
            Tipo = "Sierreño"
            Precio = "20"
            Cantidad = "21"
            ImagenUrl = "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
        <GridCards          
            Nombre = "Tomate"
            Tipo = "Sierreño"
            Precio = "20"
            Cantidad = "21"
            ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
