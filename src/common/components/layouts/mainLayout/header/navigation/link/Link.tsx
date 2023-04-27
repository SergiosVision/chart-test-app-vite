import { FC, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import classNames from '@utils/classNames';

import styles from './Link.module.scss';

interface Props extends NavLinkProps {
	children: ReactNode;
}

const Link: FC<Props> = ({ children, ...rest }) => {
	return (
		<NavLink
			{...rest}
			className={({ isActive }) =>
				classNames(
					styles['navigation-item-link'],
					isActive ? styles['navigation-item-link-active'] : ''
				)
			}
		>
			{children}
		</NavLink>
	);
};

export default Link;
