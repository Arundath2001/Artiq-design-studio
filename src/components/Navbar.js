import React, { useState } from "react";
import logo from "../assets/main_logo.png";
import "./Navbar.css";
import FullScreen from "./FullScreen";
import ButtonNav from "./ButtonNav";

function Navbar(){

    const [isOpen , setIsOpen] = useState(false);

    function handleOpen(){
        setIsOpen(true);
    }

    function handleClose(){
        setIsOpen(false);
    }

    return(
        <div className="navbar">
            <img className="navimg" src={logo} alt="logo" />

            <ButtonNav text="Menu" handle={handleOpen} color="white" />
            {
                isOpen && <FullScreen close={handleClose} />
            }
        </div>
    );
}

export default Navbar;