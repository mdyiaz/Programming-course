import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import SingleCartDetail from '../SingleCartDetail/SingleCartDetail';

const CartDetails = () => {
    const cartDetail = useRouteLoaderData();
    console.log(cartDetail);
    return (
        <div>
            
               <h2>length:{cartDetail.length}</h2>

        </div>
    );
};

export default CartDetails;