import DetailsCard from '../Components/DetailsCard';
import ProductCard from '../Components/ProductCard';
import ProductGrid from '../Components/ProductGrid';

function BasicExample() {
  return (
    <div>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        <ProductCard
          Nombre = "Tomate"
          Descripcion = "Tomate verde Organico, plantado con buen cuidado y buscando la mayor calidad"
          Precio = "20"
          Cantidad = "21"
          ImagenUrl = "https://gumlet.assettype.com/mimorelia%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"/>

        <ProductGrid></ProductGrid>
            
            

        

    </div>
  );
}

export default BasicExample;