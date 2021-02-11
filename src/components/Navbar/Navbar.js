import React from 'react';
import { AppBar, Toolbar, iconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useStyles from './styles';





const Navbar = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
               <Toolbar>
                   <Typography variant='h6' className={classes.title} color='inherit'>
                       <img src={ShoppingBasketIcon} alt='Commere.js' height='25px' className={classes.image} />
                   </Typography>
                   <div className={classes.grow} />
                   <div className={classes.button}>
                        <iconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </iconButton>
                   </div>
               </Toolbar> 
            </AppBar>
        </>
    )
}

export default Navbar
