import React from 'react'
import ReactStars from "react-rating-stars-component";
import ProductCard from './ProductCard';

const FeedCard = ({card}) => {

    const {Nombre,Rating,Productos,parcelaId} = card
    console.log(card)

    const listProducts = Productos.map((producto) => {
        return (
            <div key={producto["Nombre"]} className='m-2 inline-block'>
                <center>
                    <ProductCard
                        Nombre={producto["Nombre"]}
                        Precio={producto["Precio"]}
                        ImagenUrl={producto["ImagenUrl"]}
                        Descripcion={producto["Descripcion"]}
                        CantidadPrecioKilos={producto["CantidadPrecioKilos"]}
                        CantidadExistenteKilos={producto["CantidadExistenteKilos"]} 
                        IdParcela={parcelaId}
                    />
                </center>
                
            </div>
        )
    });

    return (
        <div className='shadow-2xl p-4 rounded-md m-4 grid-rows divide-black' style={{background: '#F5F5F5'}}>
            <h1 className='text-3xl font-medium'>{Nombre}</h1>
            <ReactStars className = '-my-1' size={20} value = {Rating} edit ={false}/>
            <hr className=' divide-solid divide-red-600'></hr>            
            <div className='flex overflow-x-scroll whitespace-nowrap hide-scroll-bar text-center'>
                <div className='flex flex-nowrap'>
                
                {Productos.length !== 0 ?
                        <div>
                            {listProducts}
                        </div>
                    :
                        <h2>No hay productos</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default FeedCard