import React from 'react'
import Chat from './Chat'
import "./Chats.css"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Sarah" 
                message="Hey ! how are you :)"
                timestamp="35 minutes ago"
                profilePic="https://i.pinimg.com/736x/f5/83/85/f583859caa2e1243ff89097a641bf369.jpg"
            />
            <Chat
                name="Sarah" 
                message="Hey ! how are you :)"
                timestamp="35 minutes ago"
                profilePic="https://i.pinimg.com/736x/f5/83/85/f583859caa2e1243ff89097a641bf369.jpg"
            />
            <Chat
                name="Sarah" 
                message="Hey ! how are you :)"
                timestamp="35 minutes ago"
                profilePic="https://i.pinimg.com/736x/f5/83/85/f583859caa2e1243ff89097a641bf369.jpg"
            />
            <Chat
                name="Sarah" 
                message="Hey ! how are you :)"
                timestamp="35 minutes ago"
                profilePic="https://i.pinimg.com/736x/f5/83/85/f583859caa2e1243ff89097a641bf369.jpg"
            />
            
        </div>
    )
}

export default Chats
