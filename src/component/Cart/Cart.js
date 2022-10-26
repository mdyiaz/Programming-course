import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({course}) => {
   
    return (
        <div>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img src={course.picture} alt="Programming Courses" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {course.header}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{course.courseBody}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline bg-fuchsia-600 text-white">{course.courseFee}</div> 
                            <Link to={course._id} className="btn btn-active btn-accent text-white">Course Details</Link>

                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Cart;