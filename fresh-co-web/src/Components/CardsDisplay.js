import React, { Fragment } from 'react'
import FeedCard from './FeedCard'

const CardsDisplay = ({cards}) => {
    const listProducts = cards.map((item) => {
        return (
            <div key={item["correo"]}>
                <FeedCard card = {item["parcela"]}/>
            </div>
        )
    });
    return (
        <div>
            {listProducts}
        </div>
    )
}

export default CardsDisplay