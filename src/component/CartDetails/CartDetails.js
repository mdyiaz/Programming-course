import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCartDetail from '../SingleCartDetail/SingleCartDetail';

const CartDetails = () => {
    const cartDetail = useLoaderData();
    console.log(cartDetail);
    return (
        <div>
            
             <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={cartDetail.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cartDetail.header}</h2>
                        <p>{cartDetail.courseBody}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">{cartDetail.courseFee}</button>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default CartDetails;