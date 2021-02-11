import React from 'react';
import { Grid } from '@material-ui/core';
import ProductScreen from '../screens/ProductScreen';

//create an array of products

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$30', image: 'https://hips.hearstapps.com/s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$55', image: 'https://www.bhphotovideo.com' },
];

function Products() {
    return (

        //mapping each product

        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductScreen product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
            
       
    )
}

export default Products
