import React, { useState, useEffect,useLayoutEffect  } from 'react';
import ProductCard from "../Components/ProductCard.js";
import LocationComponent from "../Components/LocationComponent"
import axios from 'axios';
import CardsDisplay from '../Components/CardsDisplay.js';
import Header from '../Components/Header.js';

function BasicExample() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  useEffect (() => {
    getInfo()
    
    //eslint-disable-next-line
  },[]);
  
 
  const getInfo = async() => {
    try{
      const res = await axios.get("/getVendedores");
      setData(res.data.message)
      
    }catch(error){
      setData(null)
    }
  }
  
  return (
    
    <div>
      <Header></Header>
      {data !== null ? <CardsDisplay cards={data}/> : <h2>Loading...</h2>}
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