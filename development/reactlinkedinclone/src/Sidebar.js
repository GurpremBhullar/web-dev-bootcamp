import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
import background from "./background.jpg"



function Sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src={background} alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>Gurprem Bhullar</h2>
            <h4>bhullargurprem@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
    
        <div className="sidebar__bottom">
        <p>Recent</p>
        </div>

    </div>


    );
}

export default Sidebar

