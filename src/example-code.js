export default {
counter:
`export const Counter = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
};
`,
status:
`export function FriendStatus(props) {
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
`,
customSingle:
`// Hook
export function useFriendStatus(friendId) {
    const [ isOnline, setIsOnline ] = useState(null);
    const setStatus = status => setIsOnline(status.isOnline);

    useEffect(() => {
        ChatApi.subscribeToFriendStatus(friendId, setStatus);
        return () => ChatApi.unsubscribeFromFriendStatus(friendId, setStatus);
    }, friendId);

    return isOnline;
}

// Component
export function CustomHooksSingle(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
        return "Loading...";
    }

    return isOnline ? "Online" : "Offline"
}

`,
customList:
`// Hook
export function useFriendStatus(friendId) {
    const [ isOnline, setIsOnline ] = useState(null);
    const setStatus = status => setIsOnline(status.isOnline);

    useEffect(() => {
        ChatApi.subscribeToFriendStatus(friendId, setStatus);
        return () => ChatApi.unsubscribeFromFriendStatus(friendId, setStatus);
    }, friendId);

    return isOnline;
}

// Component
export function CustomHooksList(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <div style={{ color: isOnline ? "green" : "black" }}>
            Name: {props.friend.name}
        </div>
    );
}
`,
};
