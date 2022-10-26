import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCartDetail from '../SingleCartDetail/SingleCartDetail';

const CartDetails = () => {
    const cartDetail = useLoaderData();
    console.log(cartDetail);
    return (
        <div>
            
               <h1>hellow</h1>

        </div>
    );
};

export default CartDetails;