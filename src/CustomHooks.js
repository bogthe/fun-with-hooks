import React from 'react';
import { useFriendStatus } from './hooks';

export function CustomHooksSingle(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
        return "Loading...";
    }

    return isOnline ? "Online" : "Offline"
}

export function CustomHooksList(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <div style={{ color: isOnline ? "green" : "black" }}>
            Name: {props.friend.name}
        </div>
    );
}
