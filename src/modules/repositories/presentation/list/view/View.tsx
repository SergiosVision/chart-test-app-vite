import { FC } from 'react';

import ErrorText from '@components/ui/typography/text/ErrorText';

import { RepositoriesListModel } from '@modules/repositories/domain/models/RepositoriesListModel';

import Card from './Card';
import Skeletons from './Skeletons';
import styles from './styles/View.module.scss';

interface Props {
	isLoading: boolean;
	list: RepositoriesListModel[];
}

const renderList = (isLoading: boolean, list: RepositoriesListModel[]) => {
	if (isLoading) {
		return <Skeletons />;
	}

	if (!list.length) {
		return <ErrorText>List of repositories is empty</ErrorText>;
	}

	return (
		<div className={styles['list-wrapper']}>
			{list.map((item, index) => (
				<Card
					key={item?.id || index}
					id={item?.id}
					name={item?.name}
					ownerName={item?.owner?.login}
					description={item?.description}
					imageUrl={item?.owner?.avatar_url}
				/>
			))}
		</div>
	);
};

const View: FC<Props> = ({ isLoading, list }) => {
	return (
		<section className={styles.wrapper}>{renderList(isLoading, list)}</section>
	);
};

export default View;
