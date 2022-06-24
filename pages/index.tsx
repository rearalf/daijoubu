/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import { FiStar } from 'react-icons/fi'
import Link from 'next/link'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import useHome from '../hooks/useHome'
import getSeasonNow from '../services/getSeasonNow'
import styles from '../styles/Home.module.css'

interface HomeProps {
	notFound: boolean
	data: AnimeSeason['data']
	pagination: AnimeSeason['pagination']
}

const Home = (props: HomeProps) => {
	const { currentSeason, currentYear } = useHome()
	// console.log(props)
	return (
		<Fragment>
			<NavBar />
			<Layout>
				<section title="Season Anime" className="mb-56">
					<div
						className="w-full lg:grid items-center"
						style={{
							gridTemplateColumns: 'auto 1fr auto',
						}}>
						<h2 className="text-center text-2xl font-bold md:text-left text-pink-500 mb-3 lg:mb-0 lg:mr-4">{`${currentSeason} ${currentYear} Anime`}</h2>
						<hr className="w-full border-pink-300" />
						<span className="block text-center md:text-left mt-3 lg:mt-0 lg:ml-4">
							<Link href="/">
								<a className="text-sm font-bold uppercase rounded py-2 px-3 hover:bg-pink-400 hover:text-white transition-all duration-500 ease-in-out">
									View all
								</a>
							</Link>
						</span>
					</div>
					<div
						className="scroll-x-styles mt-6 pb-5 w-full flex lg:gap-7  overflow-x-auto overflow-y-hidden scroll-smooth"
						style={{
							scrollSnapType: 'x mandatory',
						}}>
						{props.data.map(anime => (
							<article
								key={anime.mal_id}
								className="snap-start origin-center relative mr-7 md:mr-7 lg:mr-0  min-w-full md:min-w-fit group"
								title={anime.title}>
								<img
									alt={anime.title}
									src={anime.images.webp.large_image_url}
									className="rounded w-full md:max-h-72 lg:max-h-96"
								/>
								<h3 className="absolute z-10 bottom-0 drop-shadow-xl text-pink-500 bg-white w-full py-6 px-3 text-center md:text-base lg:text-xl font-bold rounded-b opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
									{anime.title}
								</h3>
								<p className="absolute z-10 top-3 right-0 px-2 py-1 rounded-l flex items-center drop-shadow-xl bg-white text-pink-500 font-medium  opacity-0  group-hover:opacity-100 transition-all ease-in-out duration-500">
									<FiStar className="mr-1.5" />
									{anime.score}
								</p>
							</article>
						))}
					</div>
				</section>
			</Layout>
		</Fragment>
	)
}

export async function getServerSideProps(context: any) {
	const result = await getSeasonNow()
	return {
		props: {
			notFound: false,
			data: result.data.splice(0, 8),
			pagination: result.pagination,
		},
	}
}

export default Home
