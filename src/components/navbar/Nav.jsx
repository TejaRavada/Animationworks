import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
    const [showNavItems, setShowNavItems] = useState(false);

    const handleToggleMenu = () => {
        setShowNavItems(!showNavItems);
    };

    const handleClickOutside = useCallback((event) => {
        if (showNavItems && !event.target.closest('.nav-mob') && !event.target.closest('.nav-items')) {
            setShowNavItems(false);
        }
    }, [showNavItems]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <>
            <div className="navfixed">
                <div className="nav-full">
                    <div className="container">
                        <div className="nav">
                            <div className="logo">
                                <Link to="/">Teja Ravada</Link>
                            </div>
                            <div className="nav-mob " onClick={handleToggleMenu}>
                                <IoMdMenu />
                            </div>
                            <div className={`nav-items ${showNavItems ? 'show' : ''}`}>
                                <Link to="/CharaterAnimation" onClick={handleToggleMenu}>CharaterAnimation</Link>
                                <Link to="/Elearning" onClick={handleToggleMenu}>Elearning</Link>
                                <Link to="/Animation" onClick={handleToggleMenu}>Animation</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav