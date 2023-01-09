import React from "react";
import { NavbarStyle } from "./navbarStyle";


const Navbar = () => {
    return (
        <NavbarStyle>
            <h1 className="camp">Welcome to advitiesting campaign</h1>
            <h1>
               <a href="/create" className="ad">Create Ad</a>
            </h1>
        </NavbarStyle>
    );
}

export default Navbar;