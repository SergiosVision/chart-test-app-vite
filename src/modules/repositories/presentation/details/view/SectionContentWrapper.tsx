import { FC, ReactNode } from 'react';

import styles from './styles/SectionContentWrapper.module.scss';

interface Props {
	children: ReactNode;
}

const SectionContentWrapper: FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default SectionContentWrapper;
