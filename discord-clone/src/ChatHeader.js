import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import HelpIcon from '@material-ui/icons/Help';

function ChatHeader({channelName}){
    return(
        <div className='chatHeader'>
            <div className='chatHeader_left'>
                <h3><span className='chatHeader_hash'>
                    #
                </span>
                    {channelName}
                </h3>
            </div>
            <div className='chatHeader_right'>
                <NotificationsIcon/>
                <LocationOnIcon/>
                <PeopleIcon/>

                <div className='chatHeader_search'>
                    <input placeholder='Search' />
                    <SearchIcon/>
                </div>

                <SendIcon/>
                <HelpIcon/>
            </div>
        </div>
    )
}

export default ChatHeader