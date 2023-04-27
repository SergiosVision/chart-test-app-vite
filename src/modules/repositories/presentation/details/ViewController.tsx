import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import View from './view/View';
import { RepositoryDetailsViewModel } from './viewModel';

interface Props {
	viewModel: RepositoryDetailsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();

	const params = useParams<{ repo: string; owner: string }>();

	useEffect(() => {
		(async () => {
			if (params.owner && params.repo) {
				try {
					await viewModel.getRepositoryDetails(params.owner, params.repo);
				} catch (error) {
					showBoundary(error);
				}
			}
		})();
	}, []);

	return <View data={viewModel.data} isLoading={viewModel.isLoading} />;
};

export default observer(ViewController);
