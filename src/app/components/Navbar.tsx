"use client";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from 'react';
const Navbar = () => {
    return (
        <>
            <div className="Navbar_outer">
                <div className="Navbar">
                    <div className="logo">
                        <img src='../Logo.png' alt="error" />
                    </div>
                    <div className="Nav_options">
                        <ul>
                            <li><a href="">Qoutes</a></li>
                            <li><a href="">Specifications</a></li>
                            <li><a href="">How-to</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="btn_Container">
                        <div className="btn">
                            Learn More {<ArrowOutwardIcon />}
                        </div>
                    </div>
                </div></div>
        </>
    )
}
export default Navbar