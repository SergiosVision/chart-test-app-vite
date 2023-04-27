import { FC } from 'react';

import githubApiService from '@services/api/github/github.api.service';

import ErrorBoundaryWrapper from '@components/errors/ErrorBoundaryWrapper';

import { RepositoriesRepositoryImpl } from '../../data/repository';
import { GetRepositoryDetailsCase } from '../../domain/usecases/getRepositoryDetails';

import ViewController from './ViewController';
import { RepositoryDetailsViewModel } from './viewModel';

const repository = new RepositoriesRepositoryImpl(githubApiService);
const getRepositoryDetailsCase = new GetRepositoryDetailsCase(repository);
const viewModel = new RepositoryDetailsViewModel({ getRepositoryDetailsCase });

const Provider: FC = () => {
	return (
		<ErrorBoundaryWrapper>
			<ViewController viewModel={viewModel} />
		</ErrorBoundaryWrapper>
	);
};

export default Provider;
