import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidePage = ({course}) => {
    return (
        <div className='border-8 rounded-lg px-8 '>
            <Link to={course._id}><h1>{course.header}</h1></Link>
        </div>
    );
};

export default LeftSidePage;