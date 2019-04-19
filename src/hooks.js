import { useState, useEffect } from 'react';
import ChatApi from './mocks/chatApi';

export function useFriendStatus(friendId) {
    const [ isOnline, setIsOnline ] = useState(null);
    const setStatus = status => setIsOnline(status.isOnline);

    useEffect(() => {
        ChatApi.subscribeToFriendStatus(friendId, setStatus);
        return () => ChatApi.unsubscribeFromFriendStatus(friendId, setStatus);
    }, friendId);

    return isOnline;
}