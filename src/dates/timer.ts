const getDatesDifference = (hours: number, minutes: number, seconds: number): number => {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();
    const currentHours: number = date.getHours();
    const currentMinutes: number = date.getMinutes();
    const currentSeconds: number = date.getSeconds();

    return Date.parse(new Date(year, month, day, currentHours + hours, currentMinutes + minutes, currentSeconds + seconds).toUTCString()
    ) - Date.parse(new Date().toUTCString());
}

export default getDatesDifference;