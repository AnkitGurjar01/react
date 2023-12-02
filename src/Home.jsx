import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';


const Home = () => {
    return (
        <>
        <Navbar/>
        <h1>home </h1>
            <Outlet/>
        </>
    );
};

export default Home;
