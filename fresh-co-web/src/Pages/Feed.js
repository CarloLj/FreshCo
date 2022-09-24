import ProductCard from '../Components/ProductCard.js';

function BasicExample() {
  return (
    <div>
        <ProductCard 
            Nombre = "Tomate"
            Precio = "20"
            ImagenURL = "https://gumlet.https://via.placeholder.com/50://via.placeholder.com/50.com/https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FTomate&psig=AOvVaw0npDBFAWSxRZ942fBFYZqT&ust=1664146177494000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiJteDBrvoCFQAAAAAdAAAAABAD%2Fimport%2F2018%2F05%2Fgrid-noticias%2Fmichoacan-salud%2F11%2Ftomate.jpg"
            Descripcion = "Tomate verde organico"
            CantidadPrecioKilos = "1"
            CantidadExistenteKilos = "100"
        />
    </div>
  );
}

export default BasicExample;