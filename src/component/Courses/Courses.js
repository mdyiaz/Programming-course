import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import LeftSidePage from '../Shared/LeftSidePage';

const Courses = () => {
        const courses = useLoaderData ();
        
    
    return (
        <div>
            

            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 ..."><LeftSidePage></LeftSidePage></div>
                <div className="row-span-2 col-span-2 ...">
                    
                        {
                            courses.map(course => <Cart
                            key={course._id}
                            course= {course}> 
                            </Cart>)
                        }

                     </div>
            </div>
        </div>
    );
};

export default Courses;