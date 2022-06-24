import getSeason from '../utils/getSeason'

function useHome() {
	const { currentSeason, currentYear } = getSeason()
	return {
		currentSeason,
		currentYear,
	}
}

export default useHome
