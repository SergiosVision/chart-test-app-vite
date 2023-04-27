import { SeriesOptionsType } from 'highcharts';
import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import View from './view/View';
import { WeeklyCommitCountChartViewModel } from './viewModel';

interface Props {
	viewModel: WeeklyCommitCountChartViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();
	const params = useParams<{ repo: string; owner: string }>();

	useEffect(() => {
		(async () => {
			if (params.owner && params.repo) {
				try {
					await viewModel.getWeeklyCommitCount(params.owner, params.repo);
				} catch (error) {
					showBoundary(error);
				}
			}
		})();
	}, []);

	const chartData = useMemo(
		() =>
			Object.keys(viewModel.data).map(key => ({
				name: key,
				data: viewModel.data[key as keyof typeof viewModel.data]
			})),
		[viewModel.data]
	) as SeriesOptionsType[];

	return <View chartData={chartData} isLoading={viewModel.isLoading} />;
};

export default observer(ViewController);
