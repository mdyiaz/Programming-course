import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ...">Left side</div>
                <div class="row-span-2 col-span-2 ...">  <Outlet></Outlet> </div>
            </div>
          
        </div>
    );
};

export default Main;