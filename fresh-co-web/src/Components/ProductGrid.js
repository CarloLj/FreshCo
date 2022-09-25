import React from "react";
import GridCards from './ProductCard';

// export default function ProductCard({
//   Nombre,
//   Precio,
//   ImagenUrl,
//   Descripcion,
//   Cantidad
// }) 

// {
//   return (
//     <section class="overflow-hidden text-gray-700 ">
//   <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
//     <div class="flex flex-wrap -m-1 sm:-m-2">
//       <div class="flex flex-wrap w-1/2">
//         <div class="w-full p-1 sm:p-2">
//           <GridCards          
//             Nombre = "Tomate"
//             Descripcion = "Sierreño"
//             Precio = "20"
//             CantidadExistenteKilos = "21"
//             ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>
//         </div>
//       </div>

//       <div class="flex flex-wrap w-1/2">
//         <div class="w-full p-1 sm:p-2">
//         <GridCards          
//             Nombre = "Tomate"
//             Descripcion = "Sierreño"
//             Precio = "20"
//             CantidadExistenteKilos = "21"
//             ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>
//         </div>
//       </div>
//       <div class="flex flex-wrap w-1/2">
//         <div class="w-full p-1 sm:p-2">
//         <GridCards          
//             Nombre = "Tomate"
//             Descripcion = "Sierreño"
//             Precio = "20"
//             CantidadExistenteKilos = "21"
//             ImagenUrl = "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg"/>
//         </div>
//       </div>
//       <div class="flex flex-wrap w-1/2">
//         <div class="w-full p-1 sm:p-2">
//         <GridCards          
//             Nombre = "Tomate"
//             Descripcion = "Sierreño"
//             Precio = "20"
//             CantidadExistenteKilos = "21"
//             ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     );
// }
const ProductCard = ({card}) => {

  const {Productos} = card

  const listProducts = Productos.map((producto, index) => {
      return (
        <div key={index} class="flex flex-wrap w-1/2">
          <div class="w-full p-1 sm:p-2">
            <GridCards          
              Nombre={producto["Nombre"]}
              Precio={producto["Precio"]}
              ImagenUrl={producto["ImagenUrl"]}
              Descripcion={producto["Descripcion"]}
              CantidadPrecioKilos={producto["CantidadPrecioKilos"]}
              CantidadExistenteKilos={producto["CantidadExistenteKilos"]} 
              IdParcela={'0'}
              />
          </div>
        </div> 
      )
  })

  return(
    <section class="overflow-hidden text-gray-700 ">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="flex flex-wrap -m-1 sm:-m-2">
          {listProducts}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;