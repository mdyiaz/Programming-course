import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSidePage from '../Shared/LeftSidePage';

const Courses = () => {
        const courses = useLoaderData ();
        console.log(courses);
    
    return (
        <div>
            

            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ..."><LeftSidePage></LeftSidePage></div>
                <div class="row-span-2 col-span-2 ..."><p>Courses: {courses.length}</p> </div>
            </div>
        </div>
    );
};

export default Courses;