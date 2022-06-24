import { API_URL } from '../utils/settings'

function formatGetRandomAnime(data: RandomAnime): RandomAnime {
	return {
		mal_id: data.mal_id,
		url: data.url,
		images: data.images,
		title: data.title,
		type: data.type,
		source: data.source,
		airing: data.airing,
		score: data.score,
		synopsis: data.synopsis,
		season: data.season,
		year: data.year,
		genres: [...data.genres],
	}
}

async function getRandomAnime(): Promise<RandomAnime | boolean> {
	const res = await fetch(`${API_URL}/random/anime`)
	const data: { data: RandomAnime } = await res.json()
	if (data.data.status === 404) {
		console.log('Not found random anime')
		return false
	} else {
		return formatGetRandomAnime(data.data)
	}
}

export default getRandomAnime
