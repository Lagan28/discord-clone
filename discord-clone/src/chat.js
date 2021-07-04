import React, {useEffect, useState} from 'react';
import ChatHeader from './ChatHeader';
import Message from './message'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './Chat.css';
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {selectChannelId, selectChannelName} from "./features/appSlice";
import db from "./firebase";
import firebase from 'firebase'

function Chat(){
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
        if (channelId) {
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            }))
        }
        },([channelId])
    )

    const sendMessage = e => {
        e.preventDefault()
        db.collection("channels").doc(channelId).collection('messages').
            add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        });
        setInput("")
    }

    return(
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className='chat_messages'>
                {messages.map((messages)=>(
                    <Message
                    timestamp={messages.timestamp}
                    message={messages.message}
                    user={messages.user}
                     />
                ))}
            </div>
            <div className='chat_input'>
                <AddCircleIcon fontsize='large'/>firebase deploy
                <form>
                    <input value={input}
                           disabled={!channelId}
                           onChange={e=> setInput(e.target.value)}
                           placeholder={`Message #${channelName}`} />
                    <button className='chat_inputbtn'
                            type='submit'
                            onClick={sendMessage}
                    >Send Message</button>
                </form>
                <div className='chat_inputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat