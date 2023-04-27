import React from 'react'

import styles from './Header.module.scss'
import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles['header-container']}>
				<Logo />
				<Navigation />
			</div>
		</header>
	)
}

export default Header
