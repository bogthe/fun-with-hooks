import React, { useState, useEffect } from 'react';
import ChatAPI from './mocks/chatApi';

/**
 * Notes:
 * - Hooks embrace JavaScript closures;
 * - Runs after EVERY RENDER + UPDATE 
 * - Effects happen after render => Each effect belongs to a render
 * - Effects don't block the layout from rendering;
 * - React cleans effects before rerunning the next ones;
 * 
 * - componentDidUpdate handles when props change;
 * - because props triggers rerendering => useEffect gets triggered then too;
 * - extra parameters calls effect hook ONLY if it's different from previous value;
 * - passing [] tells effect hook to only run and clean it up once.
 */

export function FriendStatus(props) {
    const [ isOnline, setIsOnline ] = useState(null);
    
    function handleStatusChage(status) {
        setIsOnline(status.isOnline);
    }

    
    useEffect(() => {
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChage);
        const onUnmount = () => ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChage);

        return onUnmount;
    }, props.friend.id);

    if (isOnline === null) {
        return "Loading...";
    }

    return isOnline ? 'Online' : 'Offline';
}
