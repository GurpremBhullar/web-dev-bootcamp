import React from 'react'
import "./Header.css";

function Header() {
    return ( 
        <div className="Header">
            <div className="header__left">
                <img 
                    src=" " alt="" 
                />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Header
