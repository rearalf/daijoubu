import { API_URL } from '../utils/settings'

async function getSeasonNow(page: number = 1): Promise<AnimeSeason> {
	const res = await fetch(`${API_URL}/seasons/now?page=${page}`)
	const result: AnimeSeason = await res.json()
	if (result.hasOwnProperty('error')) {
		return {
			data: [],
			pagination: {
				last_visible_page: 0,
				has_next_page: false,
				current_page: 0,
				items: {
					count: 0,
					total: 0,
					per_page: 0,
				},
			},
		}
	}
	return result
}

export default getSeasonNow
