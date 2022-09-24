import ProductCard from '../Components/ProductCard.js';



function BasicExample() {
  return (
    <div>
        <ProductCard 
            Nombre = "Tomate"
            Precio = "20"
            ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
            Descripcion = "Tomate verde organico"
            CantidadPrecioKilos = "1"
            CantidadExistenteKilos = "100"
        />
    </div>
  );
}

export default BasicExample;