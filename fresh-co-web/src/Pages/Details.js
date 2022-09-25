import DetailsCard from '../Components/DetailsCard';
import ProductCard from '../Components/ProductCard';
import ProductGrid from '../Components/ProductGrid';

function BasicExample() {
  return (
    <div>
        <div class="topnav" >
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        <center>
          <div class="	inline-block "> 
            <DetailsCard
              Nombre="Villa Bonita"
              Locacion="Monterrey, Mexico"
              Descripcion="Productos sembrados de calidad de la familia becerra"
              >
            </DetailsCard>
            <div class="translate-y-10">
              <ProductGrid >
              </ProductGrid> 
            </div>
            
          </div>
        </center>
        
        

        
            

        

    </div>
  );
}

export default BasicExample;