import React, { useState } from 'react';
import Parcela from "../Components/Parcela.js";
import ProductCard from "../Components/ProductCard.js";
import LocationComponent from "../Components/LocationComponent"

function BasicExample() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <ProductCard
        Nombre="Tomate"
        Precio="20"
        ImagenUrl="https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
        Descripcion="Tomate verde organico"
        CantidadPrecioKilos="1"
        CantidadExistenteKilos="100"
      />
      <LocationComponent value={value} setValue={setValue}/>
    </div>
  );
}

export default BasicExample;
