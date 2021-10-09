import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import linkedinPic from './linkedin.jpg';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Header() {
    return (
        <div className='header'>
            

            <div className="header__left">
                <img src={linkedinPic} alt=" "/>
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
                
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            </div>
        </div>
    )
}

export default Header
