import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import SingleCartDetail from '../SingleCartDetail/SingleCartDetail';

const CartDetails = () => {
    const cartDetails = useRouteLoaderData();
    console.log(cartDetails);
    return (
        <div>
            
            {
                cartDetails.map(cartDetail => <SingleCartDetail
                key={cartDetail._id}
                cartDetail={cartDetail}>
                    
                </SingleCartDetail>)
            }

        </div>
    );
};

export default CartDetails;