import React from 'react';
import { Avatar, IconButton ,Input} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                {/* 1 */}
                <Avatar/>

                {/* 2 */}
                <div className="chat__headerInfo">
                    <h4>🌸🌸 වගේ පුංචි 👶👶 අපි</h4>
                    <p>last seen at 2.34pm</p>
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
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Shehan</span>
                            this is the message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receive">
                    <span className="chat__name">Shehan</span>
                            this is the message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Shehan</span>
                            this is the message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                
            </div>
            <div className="chat__input">
                <IconButton>
                    <MoodIcon/>
                </IconButton>
                
                <div className="chat__inputBarContainer">
                    <form action="">
                        <input type="text" placeholder="Type a message"/>
                        <button type="submit">ksjfhskjf</button>
                    </form>
                    
                </div>
                <IconButton>
                    <MicIcon/>
                </IconButton>
                
            </div>

        </div>
    )
}

export default Chat;
