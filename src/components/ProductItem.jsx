import React from 'react';

const ProductItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="product-item">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
        </div>
    );
};

export default ProductItem;
