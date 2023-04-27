import React from 'react';

import Container from '@components/layouts/containers/сontainer/Сontainer';
import TextH3 from '@components/ui/typography/text/TextH3';

import { RepositoriesList } from '@modules/repositories/presentation/list';

const Repositories: React.FC = () => {
	return (
		<Container className='flex flex-col w-full gap-6'>
			<TextH3 className='center text-center uppercase'>
				List of facebook organization repositories
			</TextH3>
			<RepositoriesList />
		</Container>
	);
};

export default Repositories;
