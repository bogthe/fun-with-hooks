let timerId = null;
let isFriendOnline = true;
let subscribedFriendIds = new Set();

const subscribeToFriendStatus = (friendId, callback) => {
    if (subscribedFriendIds.has(friendId)) {
        return;
    }

    subscribedFriendIds.add(friendId);
    timerId = setInterval(() => {
        isFriendOnline = !isFriendOnline;
        callback({ isOnline: isFriendOnline });
    }, 1000);
};

const unsubscribeFromFriendStatus = (friendId, callback) => {
    console.log("isFriendOnline", isFriendOnline, friendId);
    clearInterval(timerId);
}

export default {
    subscribeToFriendStatus,
    unsubscribeFromFriendStatus
}
