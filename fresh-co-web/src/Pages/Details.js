import DetailsCard from '../Components/DetailsCard';
import ProductCard from '../Components/ProductCard';
import ProductGrid from '../Components/ProductGrid';
import Header from '../Components/Header';

function BasicExample() {
  return (
    <div>
        <Header/>
        <center>
          <div class="inline-block"> 
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