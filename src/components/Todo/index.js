import React from 'react';
import { List, ListItemText, ListItemAvatar, ListItem } from '@material-ui/core';
import './todo.css';

function Todo(props) {
    return (
        <List>
            <ListItem className='todo__list'>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary='Дуусах хугацаа ⏲️'/> 
            </ListItem>
        </List>
    )
}

export default Todo
