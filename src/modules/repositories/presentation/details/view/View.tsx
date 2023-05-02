import { FC } from 'react';

import ErrorText from '@components/ui/typography/text/ErrorText';

import { RepositoryDetailsModel } from '@modules/repositories/domain/models/RepositoryDetailsModel';

import CommonInfo from './info/CommonInfo';

interface Props {
	isLoading: boolean;
	data: ValueOrNull<RepositoryDetailsModel>;
}

const View: FC<Props> = ({ isLoading, data }) => {
	return (
		<section className='min-h-[200px]'>
			{!isLoading && !data ? (
				<ErrorText>Cannot get details</ErrorText>
			) : (
				<CommonInfo data={data} isLoading={isLoading} />
			)}
		</section>
	);
};

export default View;
