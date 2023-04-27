import { FC } from 'react';

import githubApiService from '@services/api/github/github.api.service';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { RepositoriesRepositoryImpl } from '../../data/repository';
import { GetRepositoriesListCase } from '../../domain/usecases/getRepositoriesList';

import ViewController from './ViewController';
import { RepositoriesListViewModel } from './viewModel';

const repository = new RepositoriesRepositoryImpl(githubApiService);
const getRepositoriesListCase = new GetRepositoriesListCase(repository);
const viewModel = new RepositoriesListViewModel({ getRepositoriesListCase });

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
