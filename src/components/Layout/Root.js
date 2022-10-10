import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header'
import Footer from '../Footer'


export const ProductsContext = createContext([])
const Root = () => {
    const products = useLoaderData()
    return (
        <ProductsContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ProductsContext.Provider>
        
    );
};

export default Root;