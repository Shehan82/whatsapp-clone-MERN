import React from 'react';
import { Avatar, IconButton ,Input} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                {/* 1 */}
                <Avatar/>

                {/* 2 */}
                <div className="chat__headerInfo">
                    <h3>chat room 1</h3>
                    <p>this is last seen</p>
                </div>
                
                {/* 3 */}
                <div className="chat__headerRight">
               
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Chat;
