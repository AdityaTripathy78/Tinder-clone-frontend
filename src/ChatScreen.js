import React, { useState } from 'react'
import "./ChatScreen.css"
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://i.pinimg.com/736x/f5/83/85/f583859caa2e1243ff89097a641bf369.jpg',
            message: 'whats up'
        },
        {
            name: 'Sarah',
            image: 'https://i.pinimg.com/736x/f5/83/85/f583859caa2e1243ff89097a641bf369.jpg',
            message: 'Hows going !' 
        },
        {
            message: 'Hows going !' 
        },
    ])

        const handleSend = e => {
            e.preventDefault();

            setMessages([...messages, {message: input}])
            setInput("")
        }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">YOU MATCHED WITH SARAH ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name} 
                        src={message.image} 
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ): (
                    <div className="chatScreen_message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                

            ))}

            <div>
                <form className="chatScreen_input">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className= "chatScreen__inputField"
                        placeholder="Type a message..." 
                        type="text" 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>

            
        </div>
    )
}

export default ChatScreen
