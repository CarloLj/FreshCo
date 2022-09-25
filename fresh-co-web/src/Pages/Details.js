import React, {useState, useEffect} from 'react'
import DetailsCard from '../Components/DetailsCard';
import ProductCard from '../Components/ProductCard';
import ProductGrid from '../Components/ProductGrid';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Details() {
  const { idParcela } = useParams();
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  useEffect (() => {
    getInfo()
    
    //eslint-disable-next-line
  },[]);
  
  const getInfo = async() => {
    try{
      const res = await axios.get("/getVendedor/" + idParcela);
      console.log(res.data.data["parcela"])
      setData(res.data.data["parcela"])
    }catch(error){
      setData(null)
    }
  }
  return (
    <div>
        <Header/>
        <center>
          <div class="inline-block"> 
            {data != null ? <DetailsCard
                Nombre={data["Nombre"]}
                Locacion={data["Locacion"]}
                Descripcion={data["Descripcion"]}
                ImagenUrl={data["ImagenUrl"]}
                >
              </DetailsCard> : <h2>Loading...</h2>
            }
            <div class="translate-y-10">
              {data != null ? <ProductGrid card = {data}/> : <h2>Loading...</h2>}
            </div>
          </div>
        </center>
    </div>
  );
}

export default Details;