import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [timeString, setTimeString] = useState('')

    const formatDate = date => {
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2)
        const seconds = `0${date.getSeconds()}`.slice(-2)

        return `${hours}:${minutes}:${seconds}`
    }
    useEffect(() => {
        let myTime = setInterval(() => {
            const now = new Date();
            const newString = formatDate(now)
            setTimeString(newString)
        }, 1000)

        return () => {
            clearInterval(myTime)
        }
    }, [])

    return <p>{timeString}</p>;
}
 
export default Clock;