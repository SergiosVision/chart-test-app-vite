import React from 'react';

import routes from '@common/router/routes';

import styles from './Navigation.module.scss';
import Link from './link/Link';

const Navigation: React.FC = () => {
	return (
		<nav className={styles.navigation}>
			<ul>
				<li className='inline-flex'>
					<Link to={routes.home}>Repositories</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
