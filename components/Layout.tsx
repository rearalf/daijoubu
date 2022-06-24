import React from 'react'

type Props = {
	children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {
	return (
		<main className="mt-28 mx-auto px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
			{children}
		</main>
	)
}

export default Layout
