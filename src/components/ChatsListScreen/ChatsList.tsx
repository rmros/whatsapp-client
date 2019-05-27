import {List, ListItem} from '@material-ui/core'
import * as React from 'react';
import {chats} from '../../db';
import moment from 'moment'

const ChatsList = () => (
    <div>
        <List>
            {
             chats.map((chat) => (
                 <ListItem key={chat.id}>
                     <img src={chat.picture} alt="img" />
                     <div>{chat.name}</div>
                     {
                         chat.lastMessage && (
                             <React.Fragment>
                                <div>{chat.lastMessage.content}</div>
                                <div>{moment(chat.lastMessage.createdAt).format('HH:mm')}</div>
                             </React.Fragment>
                             
                         )
                     }
                     
                 </ListItem>
                 
             ))
         }
        </List>
         
    </div>
);

export default ChatsList