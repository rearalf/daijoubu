function useNavBar() {
	const handleToggleMenu = () => {
		const iconMenu = document.getElementById('buttonMovilMenuInconMenu')
		const iconFix = document.getElementById('buttonMovilMenuInconFix')
		const navbarCollapse = document.getElementById('navbarCollapse')
		iconFix?.classList.toggle('hidden')
		iconMenu?.classList.toggle('hidden')
		navbarCollapse?.classList.toggle('hidden')
	}
	return {
		handleToggleMenu,
	}
}

export default useNavBar
