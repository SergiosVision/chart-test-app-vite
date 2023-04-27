import { FC } from 'react';

import Container from '@components/layouts/containers/сontainer/Сontainer';

import { RepositoryDetails } from '@modules/repositories/presentation/details';
import { WeeklyCommitCountChart } from '@modules/repositories/presentation/weeklyCommitCountChart';

const RepositoryDetailsPage: FC = () => {
	return (
		<Container className='flex flex-col gap-4'>
			<RepositoryDetails />
			<WeeklyCommitCountChart />
		</Container>
	);
};

export default RepositoryDetailsPage;
