import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import LeftSidePage from '../component/Shared/LeftSidePage';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

            <Footer></Footer>
          
        </div>
    );
};

export default Main;