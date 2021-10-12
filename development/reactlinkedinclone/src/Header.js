import React from 'react'
import "./Header.css";
import Linkedin from "./linkedin.jpg"
import Gurprem from "./gurprem.jpg"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';


function Header() {
    return (
        <div className='header'>
            

            <div className="header__left">
                <img
                 src={Linkedin}  
                 alt="linkedin" 
                 />
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="SupervisorAccount" />
                <HeaderOption Icon={BusinessCenterIcon} title="BusinessCenter" />
                <HeaderOption Icon={ChatIcon} title="Chat" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <Avatar alt="gurprem" src={Gurprem} title="me" />
            </div>
        </div>
    )
}

export default Header
