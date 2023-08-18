import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import gundam from '../images/gundam.jpg';
import zaku from '../images/zaku.jpg';
import zeta from '../images/zeta.jpg';
import aerial from '../images/aerial.jpg';
import qubeley from '../images/qubeley.jpg';
import nobel from '../images/nobel.jpg';
import zeong from '../images/zeong.jpg';
import mazinger from '../images/mazinger.jpg';
import mazinkaiser from '../images/mazinkaiser.jpg';
import zero from '../images/zero.jpg';
import great from '../images/great.jpg';
import grendizer from '../images/grendizer.jpg';

const ProductList = () => {
    const [products, setProducts] = useState([
        {
            productId: 1,
            productName: 'Gundam RX-78-2 HG',
            price: 40,
            imageUrl: gundam,
        },
        {
            productId: 2,
            productName: 'Zaku II HG',
            price: 50,
            imageUrl: zaku,
        },
        {
            productId: 3,
            productName: 'Zeta Gundam MG',
            price: 79.99,
            imageUrl: zeta,
        },
        {
            productId: 4,
            productName: 'Gundam Aerial HG 1/144',
            price: 30,
            imageUrl: aerial,
        },
        {
            productId: 5,
            productName: 'Qubeley MG',
            price: 60,
            imageUrl: qubeley,
        },
        {
            productId: 6,
            productName: 'Nobel Gundam HG',
            price: 30,
            imageUrl: nobel,
        },
        {
            productId: 7,
            productName: 'Zeong MG',
            price: 70,
            imageUrl: zeong,
        },
        {
            productId: 8,
            productName: 'Mazinger Z HG',
            price: 80,
            imageUrl: mazinger,
        },
        {
            productId: 9,
            productName: 'Mazinkaiser HG',
            price: 90,
            imageUrl: mazinkaiser,
        },
        {
            productId: 10,
            productName: 'Mazinger Zero HG',
            price: 100,
            imageUrl: zero,
        },
        {
            productId: 11,
            productName: 'Great Mazinger HG',
            price: 80,
            imageUrl: great,
        },
        {
            productId: 12,
            productName: 'Grendizer HG',
            price: 80,
            imageUrl: grendizer,
        },
    ]);

    return (
        <div className="product-list-table">
            {products.map((product) => (
                <ProductItem
                    key={product.productId}
                    id={product.productId}
                    name={product.productName}
                    price={product.price}
                    imageUrl={product.imageUrl}
                />
            ))}
        </div>
    );
};

export default ProductList;
