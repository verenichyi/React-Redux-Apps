const getDatesDifference = (hours, minutes, seconds) => {
	return Date.parse(
		new Date(
			new Date().getFullYear(),
			new Date().getMonth(),
			new Date().getDate(),
			new Date().getHours() + +hours,
			new Date().getMinutes() + +minutes,
			new Date().getSeconds() + +seconds,
		)
	) - Date.parse(new Date());
}

export default getDatesDifference;