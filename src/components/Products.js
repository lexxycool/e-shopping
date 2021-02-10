import React from 'react';
import Grid from '@material-ui/core';

//create an array of products

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes'},
    { id: 2, name: 'Macbook', description: 'Apple Macbook' },
];

function Products() {
    return (

        //mapping each product

        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductScreen />
                    </Grid>
                ))}
            </Grid>
        </main>
            
       
    )
}

export default Products