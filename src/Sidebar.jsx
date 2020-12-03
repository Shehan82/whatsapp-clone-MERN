import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton ,Input} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar(props) {
    return (

        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input className="sidebar__searchInput" type="text"  placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar__chat">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                
            </div>
        </div>
    )
}

export default Sidebar;
