

import React, { useState, useEffect } from 'react';

import Product from '../../Components/Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await fetch('https://backendr.vercel.app/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    throw new Error('Error al obtener los productos.');
                }
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchProducts();

    }, []);




    return (
        <div>
            {
                products.map((product, index) => {
                    return <Product product={product} key={index} />
                })
            }
        </div>
    )
}

export default Notas;
