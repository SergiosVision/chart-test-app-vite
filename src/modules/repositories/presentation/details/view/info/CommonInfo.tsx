import { FC } from 'react';

import { formatBooleanToText } from '@common/formatters/boolean';
import { ValueOrNull } from '@common/types/interfaces/common';

import Section from '@components/ui/section/Section';
import TitledText from '@components/ui/typography/text/TitledText';

import { RepositoryDetailsModel } from '@modules/repositories/domain/models/RepositoryDetailsModel';

import SectionContentWrapper from '../SectionContentWrapper';

import Skeletons from './Skeletons';

interface Props {
	isLoading: boolean;
	data: ValueOrNull<RepositoryDetailsModel>;
}

const CommonInfo: FC<Props> = ({ data, isLoading }) => {
	return (
		<Section title='Common info'>
			<SectionContentWrapper>
				{!isLoading ? (
					<>
						<TitledText subTitle={data?.id}>id</TitledText>
						<TitledText subTitle={data?.name}>Name</TitledText>
						<TitledText subTitle={data?.owner?.login}>Owner</TitledText>
						<TitledText subTitle={data?.license?.name}>License</TitledText>
						<TitledText subTitle={data?.watchers}>Watchers</TitledText>
						<TitledText subTitle={formatBooleanToText(data?.private)}>
							Private
						</TitledText>
						<TitledText subTitle={formatBooleanToText(data?.has_issues)}>
							Has Issues
						</TitledText>
						<TitledText subTitle={formatBooleanToText(data?.has_projects)}>
							Has Projects
						</TitledText>
					</>
				) : (
					<Skeletons />
				)}
			</SectionContentWrapper>
		</Section>
	);
};

export default CommonInfo;
