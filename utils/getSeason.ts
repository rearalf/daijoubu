function getSeason(date: Date = new Date()) {
	const CurrentMonthNumber = date.getMonth()
	let season = ''
	if (CurrentMonthNumber === 12 || (CurrentMonthNumber >= 1 && CurrentMonthNumber <= 2)) {
		season = 'Winter'
	} else if (CurrentMonthNumber >= 3 && CurrentMonthNumber <= 5) {
		season = 'Spring'
	} else if (CurrentMonthNumber >= 6 && CurrentMonthNumber <= 8) {
		season = 'Summer'
	} else if (CurrentMonthNumber >= 9 && CurrentMonthNumber <= 11) {
		season = 'Fall'
	}
	if (CurrentMonthNumber === 12) {
		return {
			currentSeason: season,
			currentYear: date.getFullYear() + 1,
		}
	}
	return {
		currentSeason: season,
		currentYear: date.getFullYear(),
	}
}

export default getSeason
