export const getTime = (publishedTime) => {
    const time = new Date(publishedTime);
    const currentTime = new Date();
    const difference = Math.floor((currentTime - time) / 1000);
    if (difference < 60) {
        return difference + ' seconds ago';
    }
    else if (difference < 3600) {
        const minutes = Math.floor((difference / 60))
        return minutes + ' minutes ago';
    }
    else if (difference < 86400) {
        const hours = Math.floor((difference / 3600))
        return hours + ' hours ago';
    }
    else if (difference) {
        const days = Math.floor((difference / 86400))
        return days + ' days ago';
    }
}