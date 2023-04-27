import { FC } from 'react';

import githubApiService from '@services/api/github/github.api.service';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { RepositoriesRepositoryImpl } from '../../data/repository';
import { GetWeeklyCommitCountCase } from '../../domain/usecases/getWeeklyCommitCount';

import ViewController from './ViewController';
import { WeeklyCommitCountChartViewModel } from './viewModel';

const repository = new RepositoriesRepositoryImpl(githubApiService);
const getWeeklyCommitCountCase = new GetWeeklyCommitCountCase(repository);
const viewModel = new WeeklyCommitCountChartViewModel({
	getWeeklyCommitCountCase
});

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
