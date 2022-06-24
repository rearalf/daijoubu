import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useNavBar from '../hooks/useNavBar'
import { FiSearch, FiMenu, FiX } from 'react-icons/fi'

const NavBar = () => {
	const { handleToggleMenu } = useNavBar()
	return (
		<header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 bg-white shadow">
			<div className="flex flex-wrap items-center justify-between py-6 lg:py-4">
				<div className="w-1/2 md:w-auto">
					<Link href="/">
						<a>
							<Image src="/logo.svg" alt="Daijoubu" width={150} height={35} />
						</a>
					</Link>
				</div>

				<button
					onClick={handleToggleMenu}
					id="buttonMovilMenu"
					type="button"
					className="lg:hidden block p-2 focus:outline-none rounded text-pink-400 hover:bg-pink-400 hover:text-white transition-all duration-500 ease-in-out">
					<FiMenu size={24} id="buttonMovilMenuInconMenu" />
					<FiX size={24} className="hidden" id="buttonMovilMenuInconFix" />
				</button>

				<div className="hidden lg:block w-full lg:w-auto" id="navbarCollapse">
					<nav className="w-full mt-4 text-center md:mt-0">
						<ul className="md:flex items-center">
							<li>
								<a
									className="inline-block  relative transition-all duration-300 text-gray-600 font-semibold px-2 py-2 lg:px-2 hover:text-pink-500 after:bg-pink-400 after:w-0 hover:after:left-0 after:left-1/2 hover:after:w-full after:block after:h-0.5 after:-bottom-0.5 after:absolute after:transition-all after:duration-300"
									title="Home">
									Home
								</a>
							</li>
							<li className="md:ml-4">
								<a
									className="inline-block md:px-2  relative transition-all duration-300 text-gray-600 font-semibold px-2 py-2 lg:px-2 hover:text-pink-500 after:bg-pink-400 after:w-0 hover:after:left-0 after:left-1/2 hover:after:w-full after:block after:h-0.5 after:-bottom-0.5 after:absolute after:transition-all after:duration-300"
									title="Seasons">
									Seasons
								</a>
							</li>
							<li className="md:ml-4">
								<a
									className="inline-block md:px-2  relative transition-all duration-300 text-gray-600 font-semibold px-2 py-2 lg:px-2 hover:text-pink-500 after:bg-pink-400 after:w-0 hover:after:left-0 after:left-1/2 hover:after:w-full after:block after:h-0.5 after:-bottom-0.5 after:absolute after:transition-all after:duration-300"
									title="Top Animes">
									Top Animes
								</a>
							</li>
							<li className="md:ml-4 md:hidden lg:block">
								<a
									className="inline-block md:px-2  relative transition-all duration-300 text-gray-600 font-semibold px-2 py-2 lg:px-2 hover:text-pink-500 after:bg-pink-400 after:w-0 hover:after:left-0 after:left-1/2 hover:after:w-full after:block after:h-0.5 after:-bottom-0.5 after:absolute after:transition-all after:duration-300"
									title="Schedules">
									Schedules
								</a>
							</li>
							<li className="md:ml-6 mt-3 md:mt-0">
								<form className="relative inline-block group w-3/4 lg:w-11/12">
									<div className="absolute flex inset-y-0 left-0 items-center pl-3 pointer-events-none group-hover:text-pink-400 group-focus-visible:text-pink-500">
										<FiSearch size={20} />
									</div>
									<input
										type="text"
										id="search-navbar"
										placeholder="Search..."
										className="inline-block p-2 pl-10 w-full rounded-md sm:text-sm border border-pink-200 hover:border-pink-400 focus-visible:outline-pink-500 focus-visible:outline-1 focus-visible:outline bg-white"
									/>
								</form>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default NavBar
