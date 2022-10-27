import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCartDetail from '../SingleCartDetail/SingleCartDetail';
import Pdf from "react-to-pdf";

const CartDetails = () => {

    const ref = React.createRef();
    const cartDetail = useLoaderData();
    return (
        <div>

<Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-primary mx-10" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            
             <div ref={ref} className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={cartDetail.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cartDetail.header}</h2>
                        <p>{cartDetail.courseBody}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">{cartDetail.courseFee}</button>
                        
                        <Link to="/checkout" className="btn btn-active btn-accent text-white">Get Premium Access</Link>
                        
                        
                        </div>


                    </div>
            </div>

        </div>
    );
};

export default CartDetails;