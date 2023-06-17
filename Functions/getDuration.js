export const getDuration = (duration) => {
    const time = duration.slice(2);
    const minute = time.slice(0,time.indexOf('M'));
    const seconds = time.slice(time.indexOf('M')+1,time.indexOf('S'));
    return `${minute?.length === 1 ? 0+minute : minute}:${seconds?.length === 1 ? 0+seconds : seconds}`;
}