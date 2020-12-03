import React from 'react';
import './SidebarChat.css';
import { Avatar, IconButton ,Input} from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                    <h4>chat room</h4>
                    <p>this is the last massege</p>
            </div>
        </div>
    )
}

export default SidebarChat
